# Ecco CSS

<p>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-0b6e99?style=flat-square" alt="MIT License"></a>
  <a href="https://arpalanca.github.io/eccocss/"><img src="https://img.shields.io/badge/Docs-live-0b6e99?style=flat-square" alt="Live docs"></a>
  <a href="https://cdn.jsdelivr.net/gh/arpalanca/eccocss@main/dist/ecco.min.css"><img src="https://img.shields.io/badge/CDN-jsDelivr-0b6e99?style=flat-square&logo=jsdelivr&logoColor=white" alt="jsDelivr CDN"></a>
</p>

## Minimal classless CSS for semantic HTML

One stylesheet. Zero JavaScript. Semantic HTML that looks polished by default.

**Include Ecco. Write HTML. Done.**

**Docs & demo:** [arpalanca.github.io/eccocss](https://arpalanca.github.io/eccocss/)

## Why Ecco?

- **Classless:** style by tag, not by class soup
- **Drop-in:** one `<link>`, no build step required
- **Responsive:** sensible defaults on phone and desktop
- **Light & dark:** follows `prefers-color-scheme`
- **Themeable:** override CSS variables to match your brand
- **Tiny:** readable source, small minified file

## Table of contents

- [Quick start](#quick-start)
- [Starter HTML](#starter-html)
- [Customization](#customization)
- [Demo](#demo)
- [Browser support](#browser-support)
- [Build from source](#build-from-source)
- [License](#license)

## Quick start

There are a few ways to get Ecco onto a page.

### 1. Download the CSS file

Download the minified stylesheet and host it with your site:

- **Minified (recommended):** [`dist/ecco.min.css`](https://github.com/arpalanca/eccocss/raw/main/dist/ecco.min.css)
- **Readable source:** [`dist/ecco.css`](https://github.com/arpalanca/eccocss/raw/main/dist/ecco.css)
- **Full repo ZIP:** [Download ZIP](https://github.com/arpalanca/eccocss/archive/refs/heads/main.zip)

Then link it in your `<head>`:

```html
<link rel="stylesheet" href="css/ecco.min.css" />
```

### 2. Use the CDN

Link Ecco from [jsDelivr](https://www.jsdelivr.com/) (no download needed):

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/arpalanca/eccocss@main/dist/ecco.min.css"
/>
```

For production, pin a tag or commit SHA instead of `@main`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/arpalanca/eccocss@v0.1.0/dist/ecco.min.css"
/>
```

### 3. Install with npm

From GitHub:

```bash
npm install github:arpalanca/eccocss
```

Then link the file:

```html
<link rel="stylesheet" href="node_modules/eccocss/dist/ecco.min.css" />
```

Or import from your bundler / CSS entry:

```css
@import "eccocss/dist/ecco.min.css";
```

## Starter HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <title>Hello Ecco</title>
    <link rel="stylesheet" href="css/ecco.min.css" />
  </head>
  <body>
    <main>
      <h1>Hello</h1>
      <p>Semantic HTML, styled automatically.</p>
      <button>Get started</button>
    </main>
  </body>
</html>
```

Put content in `header`, `main`, `footer`, `article`, `section`, `aside`, `nav`, or `form` as direct children of `body`. Ecco centers them and caps width for comfortable reading.

## Customization

Ecco is built on CSS variables. Override any token on `:root` (or a parent):

```css
:root {
  --ecco-hue: 160;
  --ecco-primary: hsl(160 55% 35%);
  --ecco-width: 52rem;
  --ecco-font-family: "IBM Plex Sans", system-ui, sans-serif;
}
```

Light and dark themes follow the system preference. Useful tokens:

| Variable | Role |
| --- | --- |
| `--ecco-bg` | Page background |
| `--ecco-text` | Body text |
| `--ecco-muted` | Secondary text |
| `--ecco-primary` | Links & primary buttons |
| `--ecco-border` | Borders & dividers |
| `--ecco-surface` | Cards, fields, panels |
| `--ecco-width` | Content max width |
| `--ecco-spacing` | Base spacing unit |
| `--ecco-border-radius` | Corner radius |
| `--ecco-font-family` | Body font stack |

See [`css/ecco.css`](css/ecco.css) for the full set.

## Demo

Live docs and samples: [arpalanca.github.io/eccocss](https://arpalanca.github.io/eccocss/)

Or open [`docs/index.html`](docs/index.html) locally.

The site is hosted with **GitHub Pages** from the `docs/` folder (`Settings → Pages → Deploy from a branch → /docs`).

## Browser support

Ecco targets current evergreen browsers (Chrome, Firefox, Safari, Edge). Internet Explorer is not supported.

## Build from source

```bash
npm install
npm run build
```

Outputs:

- `dist/ecco.css` (readable)
- `dist/ecco.min.css` (minified)
- copies into `docs/` for GitHub Pages

## Philosophy

1. **Drop-in first:** one `<link>`, zero config, zero JavaScript.
2. **Semantic by default:** style the HTML you already write.
3. **Classless (for now):** optional classes only when they earn their place.
4. **Theme with variables:** change look without fighting specificity.
5. **Stay small:** readable source, tiny minified dist.

## License

Licensed under the [MIT License](LICENSE).
