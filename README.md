# Quorix UI

Quorix UI is the shared visual foundation for `quorix-vietnam` and future Quorix projects. It is a lightweight, framework-agnostic CSS package that ships reset styles, color tokens, typography tokens, and a growing semantic color layer for editorial, blog, dashboard, and reading-first interfaces.

This release keeps typography untouched and expands the color system with reusable semantic tokens for:

- code blocks and code action buttons
- overlays and modal backdrops
- lightbox panels and elevated dark surfaces
- high-contrast text on accent backgrounds

For Vietnamese documentation, see [README.vi.md](./README.vi.md).

## Package

- Package: `@quorix/ui`
- Version: `1.2.0`
- Repository: [vmcchooky/quorix-ui](https://github.com/vmcchooky/quorix-ui)
- License: `MIT`

## What Is Included

```text
css/
  colors.css
  index.css
  reset.css
  typography.css
fonts/
  AWSDiatypeRoundedSemi-Mono-Bold.woff2
  AWSDiatypeRoundedSemi-Mono-Regular.woff2
  FragmentMono-Regular.woff2
```

`css/index.css` remains the main entry point and imports files in this order:

1. `reset.css`
2. `colors.css`
3. `typography.css`

## Installation

### npm

```bash
npm install @quorix/ui
```

Import the full foundation:

```js
import '@quorix/ui/css/index.css';
```

Or import only the layers you need:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
import '@quorix/ui/css/typography.css';
```

### CSS `@import`

```css
@import '@quorix/ui/css/index.css';
```

### CDN

Use `@latest` if you want the newest published version:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@latest/css/index.css"
/>
```

Or pin a specific release such as `1.2.0`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.2.0/css/index.css"
/>
```

## Quick Start

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.2.0/css/index.css"
    />
    <style>
      body {
        background: var(--qx-bg-base);
        color: var(--qx-text-main);
        padding: 32px;
      }

      .demo-card {
        background: var(--qx-bg-surface);
        border: 1px solid var(--qx-border);
        border-radius: 16px;
        padding: 24px;
      }

      .demo-meta {
        color: var(--qx-text-muted);
      }

      .demo-button {
        display: inline-block;
        margin-top: 16px;
        border: 0;
        border-radius: 999px;
        padding: 12px 18px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <section class="demo-card">
      <p class="qx-note-tech">Quorix UI</p>
      <h1 class="qx-heading-tech">Editorial foundation for Quorix sites</h1>
      <p class="qx-text-body">
        Share the same reset, typography language, foundation tokens, and
        semantic UI colors across blogs, dashboards, cards, modals, and code
        surfaces.
      </p>
      <p class="qx-text-body demo-meta">
        Balanced warm off-white neutrals in light mode, elevated blue-gray
        surfaces in dark mode.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">Foundation ready</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Color System

`css/colors.css` exposes two layers:

- foundation tokens for page backgrounds, surfaces, text, borders, and brand accents
- semantic tokens for reusable UI patterns such as code blocks, overlays, sheets, modals, lightboxes, and accent-on-text

### Light Theme Tokens

| Token | Value |
| --- | --- |
| `--qx-bg-base` | `#FAF8F3` |
| `--qx-bg-surface` | `#F4F0E8` |
| `--qx-bg-surface-hover` | `#ECE5DA` |
| `--qx-text-main` | `#433D37` |
| `--qx-text-muted` | `#766F66` |
| `--qx-border` | `#E3D9CB` |

### Dark Theme Tokens

Dark mode is activated with `[data-theme="dark"]`.

| Token | Value |
| --- | --- |
| `--qx-bg-base` | `#161B22` |
| `--qx-bg-surface` | `#1D2127` |
| `--qx-bg-surface-hover` | `#252B33` |
| `--qx-text-main` | `#DDD1C0` |
| `--qx-text-muted` | `#B1A596` |
| `--qx-border` | `#343C47` |

### Brand Tokens

| Token | Value |
| --- | --- |
| `--qx-brand-red` | `#E67A86` |
| `--qx-brand-red-hover` | `#D96573` |
| `--qx-brand-blue` | `#6D8EEB` |
| `--qx-brand-blue-hover` | `#5877D6` |
| `--qx-brand-yellow` | `#D9A441` |
| `--qx-brand-yellow-hover` | `#C58E2A` |
| `--qx-brand-green` | `#58A67A` |
| `--qx-brand-green-hover` | `#478B66` |

### Alpha Tokens

| Token | Value |
| --- | --- |
| `--qx-brand-red-alpha-10` | `#E67A861A` |
| `--qx-brand-blue-alpha-10` | `#6D8EEB1A` |
| `--qx-brand-yellow-alpha-10` | `#D9A4411A` |
| `--qx-brand-green-alpha-10` | `#58A67A1A` |

## Semantic Color Layer

These tokens remove the need for app-level hardcoded values like `#0d1117`, `#111827`, `#e6edf3`, or one-off overlay black tints.

### Contrast Tokens

| Token | Purpose |
| --- | --- |
| `--qx-text-on-accent` | readable text on strong brand backgrounds such as CTA buttons and pills |

### Overlay Tokens

| Token | Purpose |
| --- | --- |
| `--qx-overlay-ink` | base overlay ink color |
| `--qx-overlay-alpha-45` | lighter backdrop for sheets, drawers, and search layers |
| `--qx-overlay-alpha-62` | stronger backdrop for image lightboxes and modal focus states |

### Elevated Dark Surface Tokens

Use these when you want a dark elevated panel even inside the light theme, such as image viewers, command dialogs, floating media controls, and immersive overlays.

| Token | Purpose |
| --- | --- |
| `--qx-ink-elevated` | core elevated dark ink |
| `--qx-surface-elevated-dark` | dark elevated panel background |
| `--qx-surface-elevated-dark-border` | low-contrast border on elevated dark surfaces |
| `--qx-surface-elevated-dark-text` | readable text color on elevated dark surfaces |
| `--qx-surface-elevated-dark-close-bg` | close button or control chip background |
| `--qx-surface-elevated-dark-close-border` | close button or control chip border |

### Code Surface Tokens

These tokens are intended for blog article code blocks, copy buttons, line-number gutters, and code toolbars.

| Token | Purpose |
| --- | --- |
| `--qx-code-surface` | code block background |
| `--qx-code-border` | code block border |
| `--qx-code-text` | code foreground text |
| `--qx-code-gutter` | line-number gutter text or dim metadata |
| `--qx-code-divider` | dividers inside code blocks or button borders |
| `--qx-code-button-bg` | copy button background |
| `--qx-code-button-hover` | copy button hover state |
| `--qx-code-button-accent` | accent text/icon color inside code controls |

### Recommended Usage

```css
.code-block {
  background: var(--qx-code-surface);
  border: 1px solid var(--qx-code-border);
  color: var(--qx-code-text);
}

.code-copy-button {
  background: var(--qx-code-button-bg);
  border: 1px solid var(--qx-code-divider);
  color: var(--qx-code-button-accent);
}

.code-copy-button:hover {
  background: var(--qx-code-button-hover);
}

.lightbox {
  background: var(--qx-overlay-alpha-62);
}

.lightbox-panel {
  background: var(--qx-surface-elevated-dark);
  border: 1px solid var(--qx-surface-elevated-dark-border);
  color: var(--qx-surface-elevated-dark-text);
}

.cta {
  background: var(--qx-brand-red);
  color: var(--qx-text-on-accent);
}
```

## Typography

Typography remains unchanged in this release.

`css/typography.css` still provides the following public tokens:

| Token | Value |
| --- | --- |
| `--qx-font-heading` | `'AWS Diatype Rounded Semi Mono', sans-serif` |
| `--qx-font-heading-alt` | `'Nunito', sans-serif` |
| `--qx-font-body` | `'Quicksand', sans-serif` |
| `--qx-font-ui` | `'AWS Diatype Rounded Semi Mono', sans-serif` |
| `--qx-font-mono` | `'JetBrains Mono', monospace` |
| `--qx-font-code` | `'Fragment Mono', monospace` |
| `--qx-weight-regular` | `400` |
| `--qx-weight-medium` | `500` |
| `--qx-weight-bold` | `700` |
| `--qx-weight-extrabold` | `800` |

## Available Classes

### Typography Utilities

| Class | Purpose |
| --- | --- |
| `.qx-heading-tech` | bold technical headline using AWS Diatype Rounded Semi Mono |
| `.qx-heading-soft` | softer display headline using Nunito |
| `.qx-text-body` | default body copy |
| `.qx-note-tech` | uppercase technical label |
| `.qx-note-ui` | uppercase UI label |
| `.qx-text-italic` | italic emphasis text |
| `.qx-code-block` | code or command block text |
| `.qx-code-comment` | italic code annotation style |

### Color Utilities

| Class | Purpose |
| --- | --- |
| `.qx-bg-primary` | primary brand background with `--qx-text-on-accent` text and hover transition |
| `.qx-badge-soft-blue` | soft blue badge style using the blue alpha token |

## Dark Mode

Dark mode is token-based and activates when an ancestor has `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Dark mode remaps both foundation and semantic tokens.</div>
  </body>
</html>
```

You can set the attribute on `html`, `body`, or any container that should use the dark token scope.

## Font Loading

`css/typography.css` loads fonts from two sources:

- Google Fonts: `JetBrains Mono`, `Nunito`, `Quicksand`
- Local bundled fonts: `AWS Diatype Rounded Semi Mono`, `Fragment Mono`

When consumed from npm or a CDN, the local `woff2` files resolve relative to `css/typography.css`.

## Usage Patterns

### Foundation Only

Use only the reset and tokens when your product already has custom components:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
```

### Full Brand Foundation

Use `index.css` when you want the full Quorix visual foundation:

```js
import '@quorix/ui/css/index.css';
```

## Release Notes For This Expansion

- Added semantic public tokens for overlays, elevated dark panels, code surfaces, and accent-on-text.
- Kept all existing foundation, brand, and alpha token names for backward compatibility.
- Left typography, fonts, font loading, and typography utility classes unchanged.
- Suggested version bump: `1.1.3` to `1.2.0`.

## Development

This package does not require a build step. The distributed files are the source files.

Typical workflow:

1. Update files in `css/` or `fonts/`
2. Validate the result in a local app or HTML page
3. Bump the package version in `package.json`
4. Publish to npm
5. Push changes to GitHub

## License

MIT
