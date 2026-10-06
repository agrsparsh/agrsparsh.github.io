/* ==========================================================================
   YOUR SITE'S CONTENT  —  the only file you need to edit day to day.

   • Text in "double quotes" is what appears on the page. Keep the quotes and
     the comma at the end of each line.
   • Wrap a word in *asterisks* to make it italic + orange:  "I'm *Sparsh*."
   • In the intro bullets, wrap words in **double asterisks** to make them bold +
     highlighted:  "I'm a **Consultant** at **EY**"
   • To add a job: copy one whole { ... }, block, paste it where you want it
     to appear, and change the text. To remove one: delete its whole block.
   • Photos: put the file in the /images folder, then list it under `photos`.
       src : the file, e.g. "images/ey-1.jpg"
       alt : a short description (helps screen readers)
       pos : optional. Which part of the photo stays visible inside the circle,
             as "left% top%" — e.g. "50% 20%" keeps the top-middle of the photo.
       caption : optional text shown when the photo is enlarged
   • Organisations without a logo get a neat outlined badge showing `monogram`.
   • `inRow: false` keeps an organisation's logo out of the row under the portrait.
   ========================================================================== */

window.SITE = {

  meta: {
    title: "Sparsh Agrawal — Consultant at EY, Singapore",
    description: "Sparsh Agrawal is a Consultant at EY in Singapore, passionate about strategy, advisory, public policy and AI.",
  },

  person: {
    name: "Sparsh Agrawal",
    initials: "SA",
    location: "Singapore",
    eyebrow: "Sparsh Agrawal / Singapore",
    headline: ["Hello There,", "I'm *Sparsh Agrawal.*"],
    bullets: [
      "I'm a **Consultant** at **EY**, advising global organisations on some of the most critical issues they face on a perpetual basis. I graduated from **NTU Singapore** with a degree in **Electrical Engineering** (Honours, with Distinction)",
      "I'm extremely passionate about **Strategy**, **Advisory**, **Public Policy**, and **AI** (most interestingly on how AI can improve governance and citizen experience)",
      "**Excellent communicator, great chef, and a people's-person**",
    ],
    portrait: {
      src: "images/portrait.jpg",            // square crop shown inside the circle
      full: "images/cover.jpg",              // full photo shown when someone clicks it
      alt: "Sparsh Agrawal smiling on a boat, with islands and sea behind him",
    },
    associatedLabel: "In the past, I've been associated with",
    links: [
      { label: "Professional Experiences", href: "#experience" },
      { label: "Education",                href: "#education" },
      { label: "Hobbies",                  href: "#hobbies" },
    ],
  },

  // Shown top-right in the header (followed by a "Contact" link) and in the Contact section.
  // newTab: true opens the link in a new browser tab.
  contact: [
    { label: "Email",    href: "mailto:sparsh001@e.ntu.edu.sg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/agrsparsh/" },
    { label: "Resume",   href: "Sparsh_Agrawal_Resume.pdf", newTab: true },
  ],

  /* ------------------------------ EXPERIENCE ------------------------------ */

  experience: [
    {
      org: "Ernst & Young (EY)",
      logo: "images/logo-ey.png",
      role: "Associate Consultant, Technology Risk Advisory & Assurance",
      start: "Nov 2025", end: "Present",
      location: "Singapore",
      bullets: [
        "Advised 10+ multinational clients in BFSI, Retail, Public Sector, and IT on the effectiveness of IT General Controls (ITGC), Privileged Access Mechanisms, and assessed compliance with regulatory requirements (e.g., MAS TRM, OSPAR, MAS Cyber Hygiene) by mapping internal controls against regulatory guidelines to identify & mitigate operational inefficiencies, enhancing overall risk management posture and customer satisfaction",
        "Led in-depth process walkthroughs for role-based access controls, change management, system migrations, and privileged access monitoring; Delivered tailored recommendations to address control deficiencies leading to greater data security (and fairness) over financial statement reporting, improving service reliability and customer trust",
      ],
      photos: [
        { src: "images/ey-4.jpg", alt: "Sparsh in an EY jacket giving a thumbs-up", pos: "50% 28%" },
        { src: "images/ey-3.jpg", alt: "Team dinner at a round table with EY colleagues" },
        { src: "images/ey-2.jpg", alt: "EY team in yellow and black shirts at Marina Bay for the Walk for Health", caption: "EY Walk for Health" },
        { src: "images/ey-1.jpg", alt: "Collage of photos from the EY Tech Risk Trivia Night", caption: "EY Tech Risk Trivia Night" },
        { src: "images/ey-5.jpg", alt: "EY team outing on a boat", pos: "50% 55%" },
      ],
    },
    {
      org: "Eastspring Investments",
      logo: "images/logo-eastspring.png",
      role: "Programme Management Analyst (Contract)",
      start: "Sep 2025", end: "Nov 2025",
      location: "Singapore",
      note: "A subsidiary of Prudential plc",
      bullets: [
        "Supported the COO (Transformation) Office in the outsourcing of middle office securities services to HSBC & Blackrock from BNP Paribas, aimed at realising operational & cost efficiency of ~$43Mn over 7 years; Collaborated with cross-functional teams based in the UK, Australia, Singapore & India",
        "Developed detailed RAID logs, action trackers, & presentation material for structured project monitoring; Coordinated and managed monthly Steerco meetings to convey critical updates and milestones to the executive management committee (EMC)",
      ],
      photos: [
        { src: "images/eastspring-1.jpg", alt: "Sparsh standing at the Eastspring Investments reception", pos: "100% 50%" },
        { src: "images/eastspring-2.jpg", alt: "Sparsh in front of the Eastspring Investments reception wall", pos: "32% 50%" },
        { src: "images/eastspring-3.jpg", alt: "Sparsh beside the Eastspring Investments sign", pos: "50% 55%" },
      ],
    },
    {
      org: "Ernst & Young (EY)",
      logo: "images/logo-ey.png",
      role: "Business Consulting (Telecom, Media, Technology) Intern",
      start: "Jan 2024", end: "Aug 2024",
      location: "Singapore",
      bullets: [
        "Worked directly with the senior leadership (Partner, TMT Business Consulting) on strategic account planning and sales enablement initiatives in ASEAN, gaining exposure to C-suite-level business development processes",
        "Assembled 10+ case studies and credentials with a focus on business outcomes delivered, and project-managed RFP response for an AI-driven Enterprise Architecture initiative from an Indonesian telco (deal size: S$800,000)",
        "Delivered actionable market insights around overall IT spending and transformational initiatives as a percentage of revenue for a major wildlife ecosystem player in Singapore",
        "Handled PMO and documentation for a low-code systems consulting engagement with a public sector client, in a total team size of 50+, contributing to one of the largest projects (Annual Revenue > S$6,000,000) of EY Singapore",
        "Maintained a daily repository of system issues via Atlassian JIRA and MS Excel; conducted extensive data analysis and reported the findings to cross-functional track leads for faster resolution of incidents, improving service delivery",
        "Redefined issue type categorisation for 1000+ user queries, improving monthly SLA and KPI targets by +5%; Additionally, developed SOPs to ensure correct issue classification and root cause analysis in future",
      ],
      photos: [
        { src: "images/ey-intern-1.jpg", alt: "EY interns and colleagues at a garden event" },
        { src: "images/ey-intern-2.jpg", alt: "Sparsh with arms crossed in front of the EY logo at the office", pos: "30% 45%" },
        { src: "images/ey-intern-3.jpg", alt: "Selfie of Sparsh and a colleague by the EY sign at the office", pos: "50% 60%" },
      ],
    },
    {
      org: "Circles.Life",
      logo: "images/logo-circles.png",
      role: "Intern, CEO's Office",
      start: "May 2023", end: "Jul 2023",
      location: "Singapore",
      bullets: [
        "Developed and pitched 5 ideas as part of innovation engine engagement with a leading Japanese telecom operator; 2 ideas selected with overall deal size > S$150,000; Presented to C-Level stakeholders for regulatory alignment and decision-making",
        "Conducted idea-specific E2E market research, designed 3 MVP tests, visualised overall customer journey, emphasising on brand narrative and proposition",
        "Consulted different departments (e.g., Engineering, Product, Design) to manage product relaunch and change requests; contributed towards determining product-market fit (PMF); created comprehensive project trackers for structured tracking",
        "Led a new community engagement campaign, and grew the social media audience by +200% through targeted marketing strategies and brand storytelling; Executed offline product marketing initiatives to enhance engagement for a new telco product",
      ],
      photos: [
        { src: "images/circles-4.jpg", alt: "Sparsh in front of the Circles logo wall at the office", pos: "10% 50%" },
        { src: "images/circles-3.jpg", alt: "Three colleagues on a sofa beneath the Circles logo" },
        { src: "images/circles-2.jpg", alt: "Three colleagues on a sofa beneath the Circles logo", pos: "50% 75%" },
        { src: "images/circles-1.jpg", alt: "Sparsh holding a 'Travel with Jetpac' sign at a promotion", pos: "50% 25%" },
      ],
    },
  ],

  // Shown under a "Leadership" sub-heading inside Professional Experiences.
  leadership: [
    {
      org: "Sime Darby Motors",
      logo: "images/logo-simedarby.png",
      inRow: false,                             // false = leave out of the "associated with" logo row under the portrait
      role: "Student Consultant · NTU PEAK Student Leadership Program",
      start: "Aug 2023", end: "Oct 2023",
      location: "Singapore",
      bullets: [
        "Proposed 4 solutions (around GenAI, omni-channel CX, and multi-channel marketing) to elevate customer experience and onboarding journey for a major automotive retailer based in Southeast Asia; Part of NTU PEAK Student Leadership Program (1/45 students selected from a pool of 500+)",
      ],
      photos: [
        { src: "images/peak-1.jpg", alt: "Sparsh presenting on stage at the NTU PEAK event", pos: "32% 50%" },
        { src: "images/peak-2.jpg", alt: "NTU PEAK cohort standing in front of the event backdrop" },
      ],
    },
    {
      org: "IEEE NTU Student Branch",
      logo: "images/logo-ieee.png",
      inRow: false,
      role: "Sales Director",
      start: "Aug 2022", end: "May 2024",
      location: "Singapore",
      bullets: [
        "Secured S$30,000+ in sponsorship from Google, TikTok & MSD for our annual flagship hackathon attended by 300+ students; Managed corporate partnerships, ensured sponsorship activations, & executed a targeted marketing strategy",
      ],
      photos: [],
    },
  ],

  /* ------------------------------- EDUCATION ------------------------------ */

  education: [
    {
      org: "Nanyang Technological University (NTU)",
      logo: "images/logo-ntu.png",
      role: "Bachelor of Engineering (Electrical and Electronic)",
      start: "Aug 2021", end: "May 2025",
      location: "Singapore",
      bullets: [
        "Honours (Distinction), Graduation CGPA: 4.24/5.00",
        "MOE Tuition Grant Recipient",
      ],
      tagsLabel: "Certifications",
      tags: [
        "AWS AI Certified Practitioner",
        "Microsoft Azure Fundamentals (AZ-900)",
        "Google Data Analytics Certificate",
        "Microsoft Azure AI Fundamentals (AI-901) — ongoing",
      ],
      photos: [
        { src: "images/ntu-2.jpg", alt: "Sparsh in graduation robes at the NTU convocation ceremony", pos: "100% 40%" },
        { src: "images/ntu-3.jpg", alt: "Sparsh in full graduation gown at the convocation", pos: "50% 20%" },
        { src: "images/ntu-4.jpg", alt: "Sparsh in front of the Electrical & Electronic Engineering staircase", pos: "50% 15%" },
      ],
    },
  ],

  /* -------------------------------- HOBBIES ------------------------------- */

  hobbies: [
    {
      title: "Cooking",
      photos: [
        { src: "images/cooking-1.jpg", alt: "A pan of freshly cooked paneer bhurji" },
        { src: "images/cooking-2.jpg", alt: "A thali with rotis, okra, dal and sliced tomato" },
        { src: "images/cooking-3.jpg", alt: "Idlis served with a bowl of sambar" },
        { src: "images/cooking-4.jpg", alt: "A pot of penne in red sauce" },
      ],
    },
    {
      title: "Public Speaking",
      photos: [
        { src: "images/speaking-1.jpg", alt: "Sparsh presenting on stage with a microphone", pos: "32% 50%" },
        { src: "images/speaking-2.jpg", alt: "Toastmasters ribbons for Best Speaker, Best Table Topics and Ice Breaker" },
        { src: "images/speaking-3.jpg", alt: "Sparsh mid-talk, gesturing as he speaks" },
      ],
    },
    {
      title: "Travelling & Exploring",
      photos: [
        { src: "images/travel-1.jpg", alt: "A Scoot aircraft on the tarmac", pos: "50% 35%" },
        { src: "images/travel-2.jpg", alt: "A city skyline with tall towers", pos: "50% 40%" },
        { src: "images/travel-3.jpg", alt: "A penguin standing on a rock", pos: "50% 45%" },
      ],
    },
  ],

  closing: {
    headline: "Let's *connect.*",
  },
};
