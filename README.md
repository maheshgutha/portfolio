# Gutha Mahesh — Portfolio

A one-page React portfolio with a **real 3D device mockup built in pure CSS**
(perspective + rotateX/rotateY) — your own project videos play live inside a
tilting browser-frame, no external mockup tool required.

## 1. Add your videos

Drop your exported clips into `public/videos/` using these exact names
(or edit the paths in `src/components/Projects.jsx`):

```
public/videos/hr-platform.mp4
public/videos/sign-language.mp4
public/videos/placement-portal.mp4
```

Keep each clip short (10–20 sec) and under ~15MB for fast loading — these
loop automatically, muted, so no audio is needed.

## 2. Add your résumé

Put your résumé PDF at `public/resume.pdf` — the "Download résumé" and
"Résumé (PDF)" buttons already link to it.

## 3. Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## 4. Deploy for free

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo → Deploy.
   (Vite projects are auto-detected, no config needed.)
3. You'll get a free URL like `mahesh-portfolio.vercel.app`.

## Where things live

- `src/components/DeviceMockup.jsx` / `.css` — the signature 3D tilting
  browser frame. Tilts toward your cursor on hover, video plays inside it.
- `src/components/Projects.jsx` — edit the `projects` array to add, remove,
  or reorder project cards. Includes AI-HR platform, sign language system,
  placement portal, BiryaniBox, and WhatsApp automation — all with real
  video clips already wired in.
- `src/components/Gallery.jsx` — three auto-scrolling photo rows (hackathons,
  robotics build process, college/learning), click any photo to enlarge.
  All 22 of your uploaded photos are already placed — edit the arrays at
  the top of the file to add more or reorder.
- `src/components/Certifications.jsx` — scrolling strip of all 14
  certificate images (converted from your PDFs), click to enlarge, plus a
  text list of hackathon wins below.
- `src/components/Lightbox.jsx` — shared full-screen image viewer used by
  both Gallery and Certifications.
- `src/components/Hero.jsx` — name, tagline, summary, buttons.
- `src/components/Skills.jsx`, `Experience.jsx` — edit the arrays at the
  top of each file to update content.
- `src/index.css` — color palette and type system (CSS variables at the top).

## Where your real assets live

- `public/gallery/` — all hackathon, college, and portrait photos
- `public/robotics/` — robotic-hand build/breadboard photos
- `public/certs/` — all 14 certificates, converted from PDF to image
- `public/videos/` — project demo clips:
  - `biryanibox-highlight.mp4` — a 20-sec highlight auto-trimmed from your
    8-min recording (the full recording was too large/long for a web embed)
  - `whatsapp-automation.mp4` — compressed from your original
  - `hr-platform.mp4`, `sign-language.mp4`, `placement-portal.mp4` — add
    your own exported clips here with these exact filenames

## Notes on what wasn't auto-included

- Your **résumé PDF** — copy it to `public/resume.pdf` yourself (any of your
  resume versions works; the download buttons already point there).
- **telecrm.zip** and the full 8-min **BiryaniBox** recording were too large
  to embed directly on a web page — the BiryaniBox video was auto-trimmed to
  a 20-sec highlight for you; consider hosting the full project code on
  GitHub and linking to it instead of embedding the zip.
- The **WhatsApp Automation** project card has placeholder copy since I
  don't have details on what it does — edit the description and GitHub link
  in `Projects.jsx`.
"# portfolio" 
