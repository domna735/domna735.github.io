# Personal Website Report (Static Portfolio)

Document date: 2026-02-05

## 1) Purpose and target audience

This website is a bilingual (English + Traditional Chinese, zh-HK) personal portfolio intended for job searching. It is designed for two reading modes:

- **Skim mode (homepage):** recruiters can evaluate scope, keywords, and evidence links quickly.
- **Deep-dive mode (project pages):** each key project has a dedicated detail page that explains the system, evidence, and results in a structured format.

Primary goals:

- Present a credible, recruiter-friendly summary of background and strengths.
- Provide fast access to evidence (GitHub repos, demos, and detailed project write-ups).
- Remain stable, lightweight, and easy to maintain (no framework requirement).

## 2) Technology stack and constraints

Stack:

- **HTML + CSS + vanilla JavaScript** (GitHub Pages friendly)
- No build step required.

Client-side behaviour:

- **Theme toggle** using the `data-theme` attribute on `<html>` and persistence via `localStorage` (`donovan-site-theme`).
- **Dynamic year** inserted into the footer via `#year`.
- **Copy email** helper using the Clipboard API with a safe fallback.

Deployment assumptions:

- Works as a GitHub Pages user site or project site.
- All links are relative (e.g., `projects/...`) so pages can be served from the repo root.

Privacy constraint:

- The folder `web page reference data/` contains private documents (transcripts, letters, etc.) and is excluded from publication via `.gitignore`.

## 3) Information architecture (site map)

Homepages:

- `index.html` (English)
- `index-zh.html` (Traditional Chinese, zh-HK)

Key project detail pages (English + zh-HK pairs):

- `projects/multimodal-virtual-communication-system.html`
- `projects/multimodal-virtual-communication-system-zh.html`
- `projects/real-time-fer.html`
- `projects/real-time-fer-zh.html`
- `projects/generative-adversarial-phonology.html`
- `projects/generative-adversarial-phonology-zh.html`
- `projects/immersive-elderly-engagement-system.html`
- `projects/immersive-elderly-engagement-system-zh.html`

Shared assets:

- `styles.css` (global styling)
- `script.js` (theme toggle, copy email, footer year)
- `assets/cv.pdf` (CV PDF download)

## 4) Homepage structure (English and Chinese)

The homepages follow the same recruiter-oriented structure:

- **Sticky header** with primary navigation (Projects / Education / Skills / Experience / Contact) and language switch.
- **Hero section** with concise identity statement and quick links (Email, LinkedIn, GitHub).
- **Highlights KPI strip** to surface a few numeric, high-signal achievements.
- **Professional summary** as short bullets.
- **Education** summary.
- **Key projects** section with:
  - short bullet outcomes
  - tags/keywords
  - evidence links (GitHub/Demo/Details)
- **Skills** grouped for readability.
- **Experience** summarised for web format.
- **Contact** and CV download.

## 5) Project detail page pattern

All project pages share a consistent layout:

- **Header** consistent with the homepage (navigation + language switch).
- **Hero** with:
  - project title
  - 1–2 line description
  - CTAs (GitHub/Demo/Back/Request materials)
  - a short callout clarifying the project focus ("why it matters")
- **Body sections** using `.prose` for long-form readability.
- **Tables** where metric summaries are important.

This consistency helps recruiters learn the site once and then move quickly between projects.

## 6) Content notes (Key projects)

### 6.1 Real-Time Facial Expression Recognition (FER)

- Focuses on end-to-end reproducibility and deployment-facing behaviour (stability/jitter, latency/FPS, calibration, domain shift).
- Provides both engineering pipeline and evaluation snapshots.
- Evidence links include the main repo and demo repo.

### 6.2 Multimodal Virtual Communication System (MVP)

- Focuses on system integration and reliability (offline-first with optional cloud backends).
- Emphasises real-time operation, persona-aware dialogue, TTS with fallback, and logging for evaluation.

### 6.3 Generative Adversarial Phonology (ciwGAN)

- Focuses on controllable speech generation and objective phonetic metrics (not listening tests alone).
- Includes a results table and limitations/next steps for research credibility.

### 6.4 Immersive Elderly Engagement System (XR)

- Focuses on service-learning deployment: 360° virtual walks, 3D reconstruction assets, and Joy-Con interaction design.
- Includes a clear section on on-site outcomes, challenges, and an explicit limitations/next steps list.
- Repo link is provided; public release may exclude large media/3D datasets depending on constraints.

## 7) Styling and accessibility summary

Styling goals:

- Recruiter-friendly readability (moderate line length, clear hierarchy, consistent spacing).
- Lightweight components (cards, chips, bullets) that render well on mobile.

Accessibility considerations currently present:

- Skip link to main content.
- Semantic structure (`header`, `main`, `section`, headings).
- Tables wrapped in a scrollable region (`.table-wrap`) for smaller screens.

## 8) Maintainability workflow (how to update)

Typical edits:

- **Add a new key project:**
  1) Create two pages under `projects/` (EN + zh-HK).
  2) Add a project card on `index.html` and `index-zh.html` with the title linked and a Details/詳情 button.

- **Update links:**
  - Homepage card actions are the fastest place for recruiters; keep GitHub/Demo links current.

- **Privacy safety:**
  - Do not place transcripts, reference letters, or sensitive datasets under the published root unless you want them public.
  - Keep `web page reference data/` excluded.

## 9) Recommended future enhancements (optional)

High-value enhancements that keep the site static and fast:

- Add OpenGraph/Twitter meta tags for nicer sharing previews.
- Add 1–2 screenshots per project (compressed, with alt text).
- Add a simple `projects/` landing page if the number of projects grows.
- Consider a short “Evidence” block on each project page: what is public now vs available on request.
- Add a lightweight `404.html` for GitHub Pages.

---

End of report.
