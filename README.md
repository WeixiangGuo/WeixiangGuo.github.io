# Weixiang Guo — Personal Homepage

Personal academic and project website for Weixiang Guo.

Website: https://weixiangguo.github.io/

## Local preview

Open `index.html` directly in a browser, or run a small static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

The site uses static HTML, CSS, and JavaScript with no package installation or build step.

## Editing

- `index.html`: biography, research, projects, education, and links.
- `beyond.html` / `beyond.css`: separate basketball, life, and travel page, linked from the homepage navigation. Add approved photos as `figure.moment` entries in `.moments-grid`, with accurate captions, image dimensions, and `data-figure` links for enlargement. The initial photo reuses the already-public mountain portrait; private source photos are not published automatically.
- `stylesheet.css`: layout, typography, colors, and responsive styles.
- `navigation.js`: responsive section navigation.
- `interactions.js`: research filtering and figure preview.
- `font-preview.html`: visual Chinese-name font comparison tool with 73 built-in
  presets, local Word/system-font discovery in supported browsers, search, and
  browser-only font-file previews.
- `MATERIALS.md`: source manifest for the collected papers and project visuals.
- `assets/`: local images, fonts, and icons.

## Deployment

Pushing to the `main` branch triggers the repository's GitHub Pages deployment. The included workflow is retained as a manual fallback and does not start a duplicate deployment on every push.

## Credits and assets

The layout was adapted from [TidalHarley's academic homepage](https://github.com/tidalharley/tidalharley.github.io), which credits [d-finite/d-finite.github.io](https://github.com/d-finite/d-finite.github.io) and [Jon Barron's academic homepage](https://jonbarron.github.io/). The referenced homepage does not include a top-level license, so no blanket license is asserted for the adapted layout.

Research figures are taken from Weixiang Guo's existing public homepage repository and remain the property of their respective authors. Institution names and marks belong to their owners.

- Outfit: SIL Open Font License; see `assets/fonts/outfit-OFL.txt`.
- Ma Shan Zheng: SIL Open Font License; see `assets/fonts/mashanzheng-OFL.txt`.
- arXiv icon: Simple Icons, CC0.
- GitHub icon: GitHub Octicons, MIT.
