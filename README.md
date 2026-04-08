# Quorix UI

Quorix UI is the shared visual foundation for `quorix-vietnam` and future Quorix projects. It is a lightweight, framework-agnostic CSS package that ships reset styles, color tokens, typography tokens, and a small set of utility classes.

This release keeps typography untouched and refines the color system into a warmer, softer, more editorial foundation:

- light mode feels like warm paper and cream notebook stock
- dark mode feels like elevated blue-gray, not pure black
- brand accents stay recognizably Quorix but are less aggressive in daily UI
- token names stay stable for backward compatibility

For Vietnamese documentation, see [README.vi.md](./README.vi.md).

## Package

- Package: `@quorix/ui`
- Repository: [vmcchooky/quorix-ui](https://github.com/vmcchooky/quorix-ui)
- License: `MIT`
- Recommended release for this palette refresh: `1.1.2`

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

Or pin a specific release such as `1.1.2`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.1.2/css/index.css"
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
      href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.1.2/css/index.css"
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
        Share the same reset, typography language, and softened interface
        palette across blogs, dashboards, cards, and reading surfaces.
      </p>
      <p class="qx-text-body demo-meta">
        Warm paper neutrals in light mode, elevated blue-gray surfaces in dark
        mode.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">Foundation ready</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Color System

`css/colors.css` now defines a softer editorial palette intended for:

- full-page backgrounds
- cards and panels
- hover states
- soft badges
- subtle metadata accents
- reading interfaces
- inline highlight surfaces
- borders that stay visible without feeling harsh

### Light Theme Tokens

| Token | Value |
| --- | --- |
| `--qx-bg-base` | `#D8C1A0` |
| `--qx-bg-surface` | `#CCB086` |
| `--qx-bg-surface-hover` | `#BE9D6C` |
| `--qx-text-main` | `#43382D` |
| `--qx-text-muted` | `#746759` |
| `--qx-border` | `#A88E68` |

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

These remain the default brand accents, but are now tuned for calmer everyday use.

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

All alpha tokens are regenerated from the updated brand colors at 10% opacity.

| Token | Value |
| --- | --- |
| `--qx-brand-red-alpha-10` | `#E67A861A` |
| `--qx-brand-blue-alpha-10` | `#6D8EEB1A` |
| `--qx-brand-yellow-alpha-10` | `#D9A4411A` |
| `--qx-brand-green-alpha-10` | `#58A67A1A` |

## Typography

Typography remains unchanged in this color refresh.

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
| `.qx-bg-primary` | primary brand background with white text and hover transition |
| `.qx-badge-soft-blue` | soft blue badge style using the updated blue alpha token |

## Dark Mode

Dark mode is token-based and activates when an ancestor has `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Dark mode uses the dark token values.</div>
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

Use `index.css` when you want the standard Quorix visual foundation:

```js
import '@quorix/ui/css/index.css';
```

### Theming in App Code

```css
.app-shell {
  background: var(--qx-bg-base);
  color: var(--qx-text-main);
}

.card {
  background: var(--qx-bg-surface);
  border: 1px solid var(--qx-border);
}

.card:hover {
  background: var(--qx-bg-surface-hover);
}

.meta-badge {
  background: var(--qx-brand-blue-alpha-10);
  color: var(--qx-brand-blue);
}
```

## Release Notes For This Refresh

- Typography, fonts, font tokens, and typography classes are unchanged.
- Public color token names are preserved for backward compatibility.
- `css/colors.css` is the primary file changed in this visual update.
- Suggested version bump: `1.1.1` to `1.1.2`.

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
