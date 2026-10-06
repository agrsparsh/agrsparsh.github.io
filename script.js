/* Builds the page from window.SITE (see content.js). You shouldn't need to edit this. */
(function () {
  'use strict';

  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  if (!S) {
    $('#main').textContent = 'Could not load content.js';
    return;
  }

  /* ---------- helpers ---------- */

  // h('div', {class: 'x', text: 'hi'}, child, [children]) → element. Uses textContent, so content is never parsed as HTML.
  const h = (tag, attrs = {}, ...kids) => {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
    return el;
  };

  // "a *b* c" → ["a ", <em>b</em>, " c"]
  const rich = (str = '') => str.split('*').map((part, i) => (i % 2 ? h('em', {}, part) : part));
  // "a **b** c" → ["a ", <strong>b</strong>, " c"]
  const bold = (str = '') => str.split('**').map((part, i) => (i % 2 ? h('strong', {}, part) : part));
  // ["Hello,", "I'm *me*"] → one line on desktop; the <br> only shows on phones
  const lines = (v) => [].concat(v).flatMap((t, i, all) => (i < all.length - 1 ? [...rich(t), ' ', h('br', { class: 'br-m' })] : rich(t)));

  const isExternal = (href) => /^https?:\/\//i.test(href);
  const a = (href, cls, ...kids) =>
    h('a', { href, class: cls, ...(isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }, ...kids);
  const newTab = (el) => { el.target = '_blank'; el.rel = 'noopener'; return el; };

  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const span = (start, end) => [start, end].filter(Boolean).join(' — ');
  const entryId = (e) => `${slug(e.org || e.title)}-${slug(e.start || '')}`.replace(/-$/, '');

  // <img> that degrades to a tidy blank if the file is missing
  const img = (src, alt, cls, extra = {}) => {
    const el = h('img', { src, alt, class: cls, loading: 'lazy', decoding: 'async', ...extra });
    el.addEventListener('error', () => el.classList.add('is-missing'));
    return el;
  };

  // Circular organisation badge: the logo (which carries the name) or an outlined badge showing the name
  const badge = (e, size) => h('span', { class: `badge ${size}${e.logo ? '' : ' badge--mono'}` },
    e.logo
      ? img(e.logo, `${e.org} logo`, 'badge__img', { loading: 'eager' })
      : h('span', { class: 'mono', text: e.monogram || e.org }));

  const p = S.person;

  /* ---------- document ---------- */

  if (S.meta && S.meta.title) document.title = S.meta.title;
  const desc = $('meta[name="description"]');
  if (desc && S.meta && S.meta.description) desc.setAttribute('content', S.meta.description);

  /* ---------- photo pop-out (lightbox) ---------- */

  let gallery = [];
  let idx = 0;
  const lbImg = h('img', { alt: '' });
  const lbCap = h('figcaption', { class: 'mono' });
  const lbPrev = h('button', { class: 'lb__nav lb__prev', type: 'button', 'aria-label': 'Previous photo', text: '←' });
  const lbNext = h('button', { class: 'lb__nav lb__next', type: 'button', 'aria-label': 'Next photo', text: '→' });
  const lbClose = h('button', { class: 'lb__close mono', type: 'button', text: 'Close ✕' });
  const lb = h('dialog', { class: 'lightbox', 'aria-label': 'Photo viewer' },
    lbClose, lbPrev, h('figure', {}, lbImg, lbCap), lbNext);

  const renderLb = () => {
    const ph = gallery[idx];
    lbImg.src = ph.src;
    lbImg.alt = ph.alt || '';
    lbCap.textContent = [ph.caption, gallery.length > 1 ? `${idx + 1} / ${gallery.length}` : ''].filter(Boolean).join('  ·  ');
    lbPrev.hidden = lbNext.hidden = gallery.length < 2;
  };
  const step = (d) => { idx = (idx + d + gallery.length) % gallery.length; renderLb(); };
  lbPrev.addEventListener('click', () => step(-1));
  lbNext.addEventListener('click', () => step(1));
  lbClose.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  const openLb = (list, i) => { gallery = list; idx = i; renderLb(); lb.showModal(); };

  // Row of circular, clickable photos
  const photos = (list = []) => list.length
    ? h('ul', { class: 'photos', 'data-n': Math.min(list.length, 5), 'aria-label': 'Photos' },
        list.map((ph, i) => {
          const btn = h('button', { class: 'photo', type: 'button', 'aria-label': `Enlarge photo ${i + 1} of ${list.length}${ph.caption ? `: ${ph.caption}` : ''}` },
            img(ph.src, ph.alt || '', null, { style: `object-position:${ph.pos || '50% 50%'}` }));
          btn.addEventListener('click', () => openLb(list, i));
          return h('li', {}, btn);
        }))
    : null;

  /* ---------- header ---------- */

  $('#top').append(
    h('div', { class: 'wrap top__bar' },
      a('#', 'brand mono', p.initials, h('span', { 'aria-hidden': 'true', text: '.' })),
      h('nav', { class: 'top__nav', 'aria-label': 'Contact' },
        S.contact.map((c) => (c.newTab ? newTab(a(c.href, 'mono link', c.label)) : a(c.href, 'mono link', c.label))),
        a('#contact', 'mono link', 'Contact'))));

  /* ---------- hero: portrait + organisations (left), tagline (right) ---------- */

  const experienceList = [...(S.experience || []), ...(S.leadership || [])];

  // Organisations that have a logo: one per organisation, linking to its first entry
  const seenOrgs = new Set();
  const orgRow = [...experienceList, ...(S.education || [])].filter((e) => {
    const k = e.org.toLowerCase();
    if (!e.logo || e.inRow === false || seenOrgs.has(k)) return false;
    seenOrgs.add(k);
    return true;
  });

  const portraitBtn = h('button', { class: 'portrait', type: 'button', 'aria-label': 'Enlarge portrait photo' },
    img(p.portrait.src, p.portrait.alt, null, { loading: 'eager', fetchpriority: 'high' }));
  portraitBtn.addEventListener('click', () =>
    openLb([{ src: p.portrait.full || p.portrait.src, alt: p.portrait.alt, caption: p.portrait.caption }], 0));

  const hero = h('section', { class: 'wrap hero', 'aria-labelledby': 'headline' },
    h('div', { class: 'hero__left' },
      portraitBtn,
      h('div', { class: 'assoc' },
        h('p', { class: 'assoc__label', text: p.associatedLabel }),
        h('ul', { class: 'assoc__list' },
          orgRow.map((e) => h('li', {},
            a(`#${entryId(e)}`, 'assoc__link', badge(e, 'badge--md'), h('span', { class: 'sr', text: e.org })))))
      )),
    h('div', { class: 'hero__copy' },
      h('p', { class: 'mono eyebrow', text: p.eyebrow }),
      h('h1', { id: 'headline' }, lines(p.headline)),
      h('ul', { class: 'bullets' }, p.bullets.map((t) => h('li', {}, bold(t)))),
      h('nav', { class: 'jump', 'aria-label': 'Jump to section' },
        p.links.map((l) => a(l.href, 'mono jump__link', `${l.label} `, h('span', { 'aria-hidden': 'true', text: '↓' }))))));

  hero.querySelectorAll('.assoc__link').forEach((el, i) => el.setAttribute('title', orgRow[i].org));

  // "01 —" style section numbers
  let secNo = 0;
  const heading = (id, title) => h('h2', { id }, h('span', { class: 'num mono', text: `${String(++secNo).padStart(2, '0')} —` }), title);

  /* ---------- an organisation entry: badge + name/designation (top-left), dates (top-right), bullets + photos ---------- */

  const entry = (e, cls = '') => h('article', { class: `entry ${cls}`, id: entryId(e) },
    h('header', { class: 'entry__head' },
      badge(e, 'badge--lg'),
      h('div', { class: 'entry__title' },
        h('h3', {}, e.url ? a(e.url, 'link', e.org) : e.org),
        e.role && h('p', { class: 'entry__role', text: e.role }),
        e.note && h('p', { class: 'entry__note', text: e.note })),
      h('p', { class: 'entry__when mono' },
        h('span', { class: 'entry__dates', text: span(e.start, e.end) }),
        e.location && h('span', { text: e.location }))),
    h('div', { class: 'entry__body' },
      h('div', { class: 'entry__text' },
        e.bullets && h('ul', { class: 'arrows' }, e.bullets.map((t) => h('li', { text: t }))),
        e.tags && h('div', { class: 'tagblock' },
          e.tagsLabel && h('p', { class: 'mono', text: e.tagsLabel }),
          h('ul', { class: 'tags' }, e.tags.map((t) => h('li', { class: 'mono', text: t }))))),
      photos(e.photos)));

  /* ---------- professional experiences: every role, one after the other ---------- */

  const experience = () => experienceList.length
    ? h('section', { class: 'sec wrap', id: 'experience', 'aria-labelledby': 'exp-h' },
        heading('exp-h', 'Professional Experiences'),
        experienceList.map((e) => entry(e)))
    : null;

  /* ---------- education, hobbies, contact ---------- */

  const education = () => (S.education && S.education.length)
    ? h('section', { class: 'sec wrap', id: 'education', 'aria-labelledby': 'edu-h' },
        heading('edu-h', 'Education'),
        S.education.map((e) => entry(e)))
    : null;

  // Each hobby is a labelled group of circle photos; the groups sit in one row to keep the section short
  const hobbies = () => (S.hobbies && S.hobbies.length)
    ? h('section', { class: 'sec wrap', id: 'hobbies', 'aria-labelledby': 'hob-h' },
        heading('hob-h', 'Hobbies'),
        h('div', { class: 'hobbies' },
          S.hobbies.map((hb) => h('div', { class: 'hobby', id: slug(hb.title) },
            h('h3', { text: hb.title }),
            photos(hb.photos)))))
    : null;

  // Full-width band: heading, then the email on its own line (centred)
  const contact = () => {
    const c = S.closing;
    if (!c) return null;
    const mail = S.contact.find((x) => x.href.startsWith('mailto:'));
    return h('section', { class: 'contact', id: 'contact', 'aria-labelledby': 'contact-h' },
      h('div', { class: 'wrap contact__inner' },
        h('p', { class: 'num mono' }, `${String(++secNo).padStart(2, '0')} — Contact`),
        h('h2', { id: 'contact-h' }, rich(c.headline)),
        mail && a(mail.href, 'contact__mail', mail.href.replace('mailto:', ''), h('span', { 'aria-hidden': 'true', text: ' →' }))));
  };

  $('#main').append(hero, experience(), education(), hobbies(), contact());
  document.body.append(lb);

  /* ---------- footer ---------- */

  $('#foot').append(
    h('div', { class: 'wrap foot__bar mono' },
      h('span', { text: `© ${new Date().getFullYear()} ${p.name}` }),
      a('#', 'link', 'Back to top ↑')));
})();
