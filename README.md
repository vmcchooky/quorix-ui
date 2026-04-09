<div align="center">
  <h1>@quorix/ui</h1>
  <p><strong>The Official Design System & UI Toolkit for Quorix Vietnam</strong></p>

  [![NPM Version](https://img.shields.io/npm/v/@quorix/ui/latest.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@quorix/ui)
  [![License](https://img.shields.io/npm/l/@quorix/ui?style=flat-square&color=green)](https://github.com/vmcchooky/quorix-ui/blob/main/LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![WCAG 2.1 AA](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-success?style=flat-square)](#accessibility-wcag-21-aa-compliance)
</div>

<br />

**@quorix/ui** provides a comprehensive, extremely lightweight, and zero-dependency solution for building modern user interfaces. Engineered specifically for Quorix Vietnam ecosystem, it bridges the gap between premium visual aesthetics and rigorous technical standards.

## ✨ Why Quorix UI?

*   **Zero Dependencies:** Our TypeScript core is built from the ground up, guaranteeing optimal performance without bleeding side-effects from third-party libraries.
*   **Premium Aesthetics:** Implements a refined blend of *Glassmorphism* and *Spatial* design concepts, creating depth, focus, and a high-end feel.
*   **Native Iconography:** Deep integration with [Lucide Icons](https://lucide.dev/), utilizing CSS `currentColor` for context-aware styling. No extra rendering overhead.
*   **Tree-shakeable Exports:** Built with `esbuild`, offering ESM and CJS formats alongside modular CSS.

---

## 🚀 Quick Start

### 1. Installation

Install via NPM (Recommended):

```bash
npm install @quorix/ui
```

### 2. Integration

Import the Core Modules in your application's entry file:

```javascript
// Import CSS Base & Components
import '@quorix/ui/dist/quorix.min.css';

// Import Interactive Core
import '@quorix/ui/dist/quorix.min.js';
```

#### Individual CSS Modules
Need a lighter footprint? You can import specific CSS modules:
```javascript
import '@quorix/ui/css/colors';
import '@quorix/ui/css/components';
import '@quorix/ui/css/animations';
```

### CDN Alternative
Fastest way to prototype. Serve directly via unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/@quorix/ui@2.1.1/dist/quorix.min.css">
<script src="https://unpkg.com/@quorix/ui@2.1.1/dist/quorix.min.js" defer></script>
```

---

## 🏗️ Architecture & Modules

Our CSS architecture (`src/css/`) is strictly categorized into 13 foundations to ensure predictability and maintainability across large-scale applications:

| Module | Purpose | Description |
| :--- | :--- | :--- |
| **`index.css`** | **Entry** | Main aggregator that orchestrates all underlying module imports. |
| **`reset.css`** | **Base** | Aggressive resets, predictable box-sizing, and baseline normalization. |
| **`colors.css`** | **Tokens** | Foundation and Semantic CSS Custom Properties (Variables). |
| **`typography.css`** | **Tokens** | Font family stacks, dynamic type scales, and line-heights. |
| **`metrics.css`** | **Tokens** | Spacing rhythms, REM breakpoints, and spatial depths (shadows). |
| **`primitives.css`** | **Atoms** | Fundamental building blocks: Buttons, Cards, Badges, Dividers. |
| **`editorial.css`** | **Atoms** | Content reading surfaces, optimized prose, blockquotes, codeblocks. |
| **`forms.css`** | **Molecules** | Accessible form controls: Inputs, Selects, Checkboxes, Toggles. |
| **`layout.css`** | **Molecules** | Structural layouts: Navbars, Sidebars, robust CSS Grids, Containers. |
| **`components.css`** | **Organisms** | Complex composite UI: Data Tables, Avatars, Progress Bars, Toasts, Tabs. |
| **`animations.css`** | **Motion** | Fluid keyframes, micro-interactions, and transitions. |
| **`utilities.css`** | **Helpers** | Tailwind-inspired utility classes specifically for Quorix design elements (e.g., `.qx-glass`). |
| **`icons.css`** | **Assets** | SVG baseline alignments and explicit Lucide integration layers. |

---

## ♿ Accessibility (WCAG 2.1 AA Compliance)

Accessibility is not an afterthought; it is woven into the fabric of Quorix UI. We strictly adhere to **WCAG 2.1 AA** guidelines:

*   **Opt-in Motion Engine:** Animations are gated by CSS media queries. If a user requests minimized motion, we respect it:
    ```css
    @media (prefers-reduced-motion: no-preference) { /* Safe animations run here */ }
    ```
*   **Calculated Color Contrast:** All functional text (primary, secondary, subtle) and vital UI boundaries maintain a minimum contrast ratio of `4.5:1` against their respective backgrounds.
*   **Intelligent Screen Readers (Toast ecosystem):**
    *   Standard notifications invoke `aria-live="polite"`.
    *   Critical validation errors leverage `assertive` combined with `role="alert"` for immediate interruption.
*   **Typography FOUT Mitigation:** We suppress Flash of Unstyled Text (FOUT) utilizing a measured fallback sequence (`AWS Diatype -> Nunito -> ui-rounded`) accompanied by `font-display: swap`.

### 🔍 Transparency, Known Limitations, & Testing

We embrace open-source transparency. Please be aware of the following edge cases:

1.  **Modal Focus Trapping:** Securely trapping keyboard focus within active Modals requires our JS core to be explicitly enabled. CSS alone cannot natively trap focus safely.
2.  **Environment Certifications:** We validate screen-reader experiences across:
    *   **Windows:** NVDA alongside Google Chrome.
    *   **macOS:** VoiceOver alongside Apple Safari.
3.  **Community Call to Action:** *Our team actively monitors runtime tab-orders. If you observe focus flow regression or improper DOM sequencing, please [open an Issue on GitHub](https://github.com/vmcchooky/quorix-ui/issues).*

---

## 🛠️ Code Example

A typical implementation of a Quorix Glass Card with a Button:

```html
<div class="qx-card qx-glass p-6 max-w-sm">
  <div class="qx-card-header pb-4 border-b">
    <h3 class="font-semibold text-lg text-primary">System Update</h3>
  </div>
  <div class="qx-card-body pt-4">
    <p class="text-secondary mb-4">Version 2.1.1 is now available to download.</p>
    <button class="qx-btn qx-btn-primary flex items-center gap-2">
      <i class="lucide-download" aria-hidden="true"></i>
      Download Now
    </button>
  </div>
</div>
```

---

<div align="center">
  <p>Built with ❤️ by <b>Vo Manh Cuong</b> & <b>Quorix Vietnam</b>.</p>
  <p><a href="https://github.com/vmcchooky/quorix-ui">View Source on GitHub</a> • Released under the MIT License.</p>
</div>
