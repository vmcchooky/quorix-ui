# Quorix UI

Quorix UI is a lightweight CSS design system toolkit for Quorix projects and any frontend that needs a reusable visual foundation.

The package is framework-agnostic and currently focuses on:

- browser reset
- color tokens
- typography tokens
- reusable typography and color utility classes
- bundled local fonts for brand expression

It can be consumed through `npm install` or directly from a CDN with a `<link rel="stylesheet">`.

For Vietnamese documentation, see [README.vi.md](./README.vi.md).

## Package Info

- Package: `@quorix/ui`
- Current version: `1.0.1`
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

`css/index.css` is the main entry point and imports everything in this order:

1. `reset.css`
2. `colors.css`
3. `typography.css`

## Installation

### npm

```bash
npm install @quorix/ui
```

Import the full toolkit:

```js
import '@quorix/ui/css/index.css';
```

Or import only the layer you need:

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

Full toolkit:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/index.css"
/>
```

Individual files:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/reset.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/colors.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/typography.css"
/>
```

If you prefer always pulling the newest published version, replace `@1.0.1` with `@latest`.

## Quick Start

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/index.css"
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
      <h1 class="qx-heading-tech">Design system foundation</h1>
      <p class="qx-text-body">
        Use Quorix UI to share the same reset, typography language, and color
        tokens across multiple projects.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">Toolkit ready</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Design Tokens

### Color Tokens

Available in `css/colors.css`.

| Token | Value |
| --- | --- |
| `--qx-brand-red` | `#F03E51` |
| `--qx-brand-red-hover` | `#D9293C` |
| `--qx-brand-blue` | `#4B6BF5` |
| `--qx-brand-blue-hover` | `#3A55D4` |
| `--qx-brand-yellow` | `#FDB022` |
| `--qx-brand-yellow-hover` | `#E39912` |
| `--qx-brand-green` | `#10B981` |
| `--qx-brand-green-hover` | `#059669` |
| `--qx-brand-red-alpha-10` | `#F03E511A` |
| `--qx-brand-blue-alpha-10` | `#4B6BF51A` |
| `--qx-brand-yellow-alpha-10` | `#FDB0221A` |
| `--qx-brand-green-alpha-10` | `#10B9811A` |
| `--qx-bg-base` | light: `#FFFFFF`, dark: `#0A0A0B` |
| `--qx-bg-surface` | light: `#F4F4F5`, dark: `#18181B` |
| `--qx-bg-surface-hover` | light: `#E4E4E7`, dark: `#27272A` |
| `--qx-text-main` | light: `#18181B`, dark: `#EDEDED` |
| `--qx-text-muted` | light: `#71717A`, dark: `#A1A1AA` |
| `--qx-border` | light: `#E4E4E7`, dark: `#27272A` |

### Typography Tokens

Available in `css/typography.css`.

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

### Typography

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
| `.qx-badge-soft-blue` | soft blue badge style |

## Dark Mode

Dark mode is token-based and activates when an ancestor has `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Dark mode uses the dark token values.</div>
  </body>
</html>
```

You can set the attribute on `html`, `body`, or any container scope that should use dark tokens.

## Font Loading

`css/typography.css` loads fonts from two sources:

- Google Fonts: `JetBrains Mono`, `Nunito`, `Quicksand`
- Local bundled fonts: `AWS Diatype Rounded Semi Mono`, `Fragment Mono`

When loaded from npm or a CDN, the local `woff2` files resolve relative to `css/typography.css`.

## Usage Patterns

### Foundation Only

Use only the reset and tokens when your product already has custom components:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
```

### Full Brand Foundation

Use `index.css` when you want the standard Quorix base styling:

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
```

## Development

This package does not require a build step right now. The distributed files are the source files.

Typical workflow:

1. Update files in `css/` or `fonts/`
2. Validate the result in a local app or HTML page
3. Bump the package version in `package.json`
4. Publish to npm
5. Push changes to GitHub

## Roadmap Ideas

This repository currently ships foundations only. Natural next steps for the design system could include:

- spacing and sizing tokens
- border radius and shadow tokens
- buttons, inputs, cards, badges, alerts
- layout utilities
- theme presets
- documentation site with live previews

## License

MIT
