# Ethan True Hawkes portfolio

The static site is in `dist/`. Open `dist/index.html` directly or run `python3 -m http.server 8000 --directory dist` and visit `http://localhost:8000`. No dependencies or build step are required.

- `index.html` contains the page sections and PDF destinations.
- `styles.css` contains the layout, typography, and interaction styles.
- `portfolio.js` handles card hover and the R shortcut when the Resume link has focus.
- `assets/` contains the local Figma artwork, icons, and font files.
- `documents/` contains four case studies and the resume.

The GitHub Pages workflow publishes `dist/` on pushes to `main`. The production URL is [truehawkes.com](https://truehawkes.com/).
