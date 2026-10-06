# Sparsh Agrawal — personal website

A dark, editorial one-page site: portrait and tagline, an organisation logo row, professional experiences,
education, hobbies and contact. It is plain HTML, CSS and JavaScript. There is nothing to install or build,
and it hosts for free on **GitHub Pages**.

## What's in this folder

| File / folder | What it is | Edit it? |
|---|---|---|
| `content.js` | **All the text**: tagline, experiences, education, hobbies, links, and which photos go where | **Yes, this is the one** |
| `images/` | Photos (`ey-1.jpg`…), organisation logos (`logo-*.png`), portrait | Yes: add or replace files |
| `index.html` | Page shell, plus the page title and link-preview text (see "Before you publish") | Rarely |
| `styles.css`, `script.js` | Design and page-building code | Only to change the look |
| `Sparsh_Agrawal_Resume.pdf` | Résumé opened by the "Resume" link in the header (it is public, phone number included) | Replace with a newer PDF of the same name |
| `favicon.svg` | Browser-tab icon ("SA.") | Rarely |
| `.nojekyll`, `.gitignore` | GitHub housekeeping | No |

> Only the contents of **this folder** go online. Your original photos and the `mockups` folder
> (one level up) stay private on your computer. The copy of your résumé in this folder is public.

---

## 1. Preview on your computer

Double-click `index.html`, or run a local server from this folder:

```bash
python -m http.server 8080
```

Then open <http://localhost:8080>. Refresh after every change.

---

## 2. Before you publish (checklist)

- [ ] **Read the whole site once** at desktop width and on your phone. Check every link (email, LinkedIn).
- [ ] **Public means public.** Everything in a public repository can be found and copied. Right now the site shows your
      name, city, LinkedIn, an email address and your CGPA. **Your phone number is deliberately not on the site.**
      Don't add it unless you're comfortable with it being scraped.
- [ ] **Email address:** `content.js` uses your NTU address (`sparsh001@e.ntu.edu.sg`). University alumni addresses can
      expire, so consider switching `contact` to a permanent one.
- [ ] **Client and deal details** in the experience bullets come straight from your résumé. Make sure your employers are
      happy for them to be public.
- [ ] **Link-preview text** in `index.html`: check the `<title>` and the two `og:` lines. These control the card shown
      when the link is pasted into WhatsApp or LinkedIn.
- [ ] **Photos:** all photos in `images/` are resized (about 100–450 KB) and stripped of EXIF/GPS data. Keep it that way
      when adding new ones (see "Adding photos").

---

## 3. Publish on GitHub Pages

### One-time setup
1. Create a free account at <https://github.com/signup>.
2. Open **Settings → Emails** and tick **Keep my email addresses private** and
   **Block command line pushes that expose my email**. Note your `ID+USERNAME@users.noreply.github.com` address.
3. Choose the address you want:
   - A repository named **`YOUR-USERNAME.github.io`** gives `https://YOUR-USERNAME.github.io` (the cleanest link).
   - Any other name, e.g. `website`, gives `https://YOUR-USERNAME.github.io/website/`. Both work.

### Option A: upload in the browser (no command line)
1. On GitHub click **+ → New repository**. Enter the name, choose **Public**, and click **Create repository**.
2. Click **uploading an existing file**.
3. Open this `site` folder in File Explorer, press **Ctrl + A**, and drag **everything inside it** into the browser
   window (`index.html`, `content.js`, the `images` folder, and so on). Drag the *contents*, not the `site` folder itself.
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, set **Branch: `main`**
   and folder **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes. The live link appears at the top of the Pages screen.

### Option B: with Git (better if you'll edit often)
**First fix your Git identity.** A previous setup left curly quotes in it, which would publish a broken name and your
real email in the commit history. In PowerShell, use plain straight quotes and your noreply address from step 2:

```bash
git config --global user.name "Sparsh Agrawal"
git config --global user.email "ID+USERNAME@users.noreply.github.com"
```

Create the empty repository on GitHub first (**Public**, don't tick "Add a README"). Then, inside this `site` folder:

```bash
git init -b main
git add .
git commit -m "Launch personal website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then do step 5 above (**Settings → Pages**).

### After it's live
- Open the link on your phone and a laptop, and paste it into WhatsApp or LinkedIn once to check the preview card.
- Add the link to your LinkedIn profile, email signature and CV.
- **Custom domain (optional):** buy one, then **Settings → Pages → Custom domain** and follow GitHub's DNS
  instructions. Tick **Enforce HTTPS** when it appears.

---

## 4. Editing the site later

The loop is always: **edit `content.js` → commit → live in about a minute.**

- **Easiest (works on a phone too):** open the repo on GitHub, click `content.js`, click the **pencil icon**, edit, then
  **Commit changes**.
- **Nicer editor:** on the repo page press the **`.`** key. GitHub opens VS Code in the browser. Edit, then use
  **Source Control** to commit.
- **With Git:** edit locally, then `git add . && git commit -m "Update" && git push`.

### How `content.js` is organised
| Section | What it controls |
|---|---|
| `person` | Name, the tagline headline and three bullets, portrait, the "associated with" label, the three jump links |
| `contact` | Header links and the Contact strip (the first `mailto:` link becomes the big email link) |
| `experience` | Work roles (newest first). Each has `org`, `logo`, `role`, `start`, `end`, `location`, `bullets`, `photos` |
| `leadership` | More roles, shown after the work roles in the same list |
| `education` | Same shape as a role, plus optional `tags` (certifications) |
| `hobbies` | Each hobby is a `title` (shown in CAPITALS) plus its `photos`, one hobby per line |
| `closing` | The "Let's connect." headline |

Tips:
- Wrap a word in `*asterisks*` to make it italic and orange, e.g. `"I'm *Sparsh Agrawal.*"`.
- **Add a role:** copy a whole `{ … },` block inside `experience`, paste it above the first one, and edit it.
  **Remove one:** delete its whole block, including the trailing comma.
- The **logo row** under the portrait is built automatically from any role or degree that has a `logo`.
  Roles without one (Sime Darby Motors, IEEE NTU) show an outlined badge with the name instead.
- Every photo is a circle and opens larger when clicked. `pos: "50% 25%"` chooses which part of the photo stays inside
  the circle (left% top%). `caption` is optional and appears when enlarged.

### Adding photos
1. Resize to about **1600 px** on the long edge and save as JPG (under ~450 KB). Convert iPhone `.heic` files first.
   Squoosh (squoosh.app) does both. **Exporting from a photo editor or Squoosh also removes GPS location data.**
2. Use **lowercase names with hyphens, no spaces** (`ey-6.jpg`). GitHub is case-sensitive:
   `Photo.JPG` will not load if `content.js` says `photo.jpg`.
3. Upload via **Add file → Upload files** on the `images` folder, then list it under the right `photos` array.
4. To replace a photo, upload a file with the **same name**, then hard-refresh (**Ctrl + Shift + R**).

### Logos
Logos are square PNGs that show the organisation's name inside the circle (`images/logo-ey.png`, etc.). To add one,
put the whole lockup on a square canvas with padding so nothing is cut off by the circle, then set `logo:` on the role.

### If you break something
- **Page goes blank or half-loads:** almost always a missing comma, quote or bracket in `content.js`. Check the lines you
  just changed. Press **F12** in your browser to see the error message.
- **Undo:** on GitHub open `content.js`, click **History**, click the last commit that worked, click **⋯ → View file**,
  copy it, then paste it over the current `content.js`.

---

## Troubleshooting

| Problem | Likely cause and fix |
|---|---|
| Live site shows a 404 | Pages isn't switched on (Settings → Pages), or `index.html` is inside a subfolder. It must be at the repo's top level. |
| Site loads but no text or images | `content.js` didn't upload or has a typo. Press F12 to read the error. |
| An image works on your PC but not online | Upper/lowercase mismatch or a space in the file name. Rename to lowercase with hyphens. |
| Changes don't appear | Wait a minute, hard-refresh (Ctrl + Shift + R), and check the **Actions** tab for a green tick. |
| Fonts look different | Google Fonts needs an internet connection. Offline, the site falls back to Georgia and system fonts. |
| The link preview shows old text | WhatsApp and LinkedIn cache previews. LinkedIn's Post Inspector can refresh it. |
