# Personal Website (Static)

This is a simple, fast personal website built with plain HTML/CSS/JS (great for GitHub Pages).

## Files

- `index.html` – page content (your CV-based sections)
- `styles.css` – styling
- `script.js` – theme toggle + copy-email helper
- `assets/cv.pdf` – your CV PDF (linked from the page)

## Quick edits you’ll likely want

- Update your LinkedIn + GitHub URLs in the **Contact** section.
- If you want to show your phone number publicly, add it in **Contact** (optional).
- Add project links (GitHub/demo/paper/video) for each project card.

## Preview locally

You can open `index.html` directly in a browser, or run a simple local server:

### Option A: Python

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

### Option B: VS Code Live Server

Install the **Live Server** extension and run “Open with Live Server”.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push these files to the repo root.
3. In GitHub: **Settings → Pages → Build and deployment**
4. Select **Deploy from a branch**, choose `main` + `/ (root)`.

After a minute, GitHub will provide your live URL.
