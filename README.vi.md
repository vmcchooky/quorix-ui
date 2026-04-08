# Quorix UI

Quorix UI là nền tảng giao diện dùng chung cho `quorix-vietnam` và các dự án Quorix sau này. Đây là package CSS nhẹ, không phụ thuộc framework, dùng để phân phối reset, color tokens, typography tokens và một lớp semantic color token cho giao diện editorial, blog, dashboard và đọc bài.

Bản cập nhật này giữ nguyên toàn bộ typography và mở rộng hệ màu với các token tái sử dụng cho:

- code block và nút thao tác trên code
- overlay và backdrop cho modal
- lightbox, mobile sheet và dark panel nổi
- text tương phản mạnh trên nền accent

Bản tiếng Anh dành cho GitHub và npm nằm ở [README.md](./README.md).

## Thông tin package

- Package: `@quorix/ui`
- Version: `1.2.0`
- Repository: [vmcchooky/quorix-ui](https://github.com/vmcchooky/quorix-ui)
- License: `MIT`

## Cấu trúc package

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

`css/index.css` vẫn là entry point chính, import theo thứ tự:

1. `reset.css`
2. `colors.css`
3. `typography.css`

## Cách dùng

### Cài bằng npm

```bash
npm install @quorix/ui
```

Import toàn bộ foundation:

```js
import '@quorix/ui/css/index.css';
```

Hoặc import từng phần:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
import '@quorix/ui/css/typography.css';
```

### Dùng CSS `@import`

```css
@import '@quorix/ui/css/index.css';
```

### Dùng qua CDN

Dùng `@latest` nếu muốn lấy bản publish mới nhất:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@latest/css/index.css"
/>
```

Hoặc khóa theo một release cụ thể như `1.2.0`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.2.0/css/index.css"
/>
```

## Ví dụ nhanh

```html
<!doctype html>
<html lang="vi">
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
      <h1 class="qx-heading-tech">Nen tang editorial cho cac site Quorix</h1>
      <p class="qx-text-body">
        Dung chung reset, ngon ngu typography, foundation token va semantic
        color token cho blog, dashboard, card, modal va code surface.
      </p>
      <p class="qx-text-body demo-meta">
        Light mode la off-white am nhe, dark mode la be mat xanh xam co chieu sau.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">San sang</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Hệ màu

`css/colors.css` hiện cung cấp 2 lớp token:

- foundation token cho nền trang, surface, text, border và brand accent
- semantic token cho code block, overlay, sheet, modal, lightbox và text trên nền accent

### Token light theme

| Token | Giá trị |
| --- | --- |
| `--qx-bg-base` | `#FAF8F3` |
| `--qx-bg-surface` | `#F4F0E8` |
| `--qx-bg-surface-hover` | `#ECE5DA` |
| `--qx-text-main` | `#433D37` |
| `--qx-text-muted` | `#766F66` |
| `--qx-border` | `#E3D9CB` |

### Token dark theme

Dark mode được kích hoạt bằng `[data-theme="dark"]`.

| Token | Giá trị |
| --- | --- |
| `--qx-bg-base` | `#161B22` |
| `--qx-bg-surface` | `#1D2127` |
| `--qx-bg-surface-hover` | `#252B33` |
| `--qx-text-main` | `#DDD1C0` |
| `--qx-text-muted` | `#B1A596` |
| `--qx-border` | `#343C47` |

### Token thương hiệu

| Token | Giá trị |
| --- | --- |
| `--qx-brand-red` | `#E67A86` |
| `--qx-brand-red-hover` | `#D96573` |
| `--qx-brand-blue` | `#6D8EEB` |
| `--qx-brand-blue-hover` | `#5877D6` |
| `--qx-brand-yellow` | `#D9A441` |
| `--qx-brand-yellow-hover` | `#C58E2A` |
| `--qx-brand-green` | `#58A67A` |
| `--qx-brand-green-hover` | `#478B66` |

### Alpha token

| Token | Giá trị |
| --- | --- |
| `--qx-brand-red-alpha-10` | `#E67A861A` |
| `--qx-brand-blue-alpha-10` | `#6D8EEB1A` |
| `--qx-brand-yellow-alpha-10` | `#D9A4411A` |
| `--qx-brand-green-alpha-10` | `#58A67A1A` |

## Lớp semantic color token

Các token này giúp app không cần hardcode các giá trị như `#0d1117`, `#111827`, `#e6edf3` hoặc các lớp overlay đen viết riêng từng dự án.

### Contrast token

| Token | Mục đích |
| --- | --- |
| `--qx-text-on-accent` | text dễ đọc trên nền accent mạnh như CTA, pill hoặc button |

### Overlay token

| Token | Mục đích |
| --- | --- |
| `--qx-overlay-ink` | màu mực nền cho overlay |
| `--qx-overlay-alpha-45` | backdrop nhẹ cho sheet, drawer, search layer |
| `--qx-overlay-alpha-62` | backdrop mạnh hơn cho modal và lightbox |

### Token cho dark elevated surface

Dùng cho các panel tối nổi phía trên nền sáng hoặc nền tối, ví dụ image viewer, command dialog, floating control và mobile sheet.

| Token | Mục đích |
| --- | --- |
| `--qx-ink-elevated` | mực nền cốt lõi cho elevated dark panel |
| `--qx-surface-elevated-dark` | nền panel tối |
| `--qx-surface-elevated-dark-border` | border nhẹ trên panel tối |
| `--qx-surface-elevated-dark-text` | màu text dễ đọc trên panel tối |
| `--qx-surface-elevated-dark-close-bg` | nền cho nút đóng hoặc control chip |
| `--qx-surface-elevated-dark-close-border` | border cho nút đóng hoặc control chip |

### Token cho code surface

Các token này dành cho code block trong bài viết, nút copy code, gutter số dòng và toolbar của code block.

| Token | Mục đích |
| --- | --- |
| `--qx-code-surface` | nền code block |
| `--qx-code-border` | border của code block |
| `--qx-code-text` | màu chữ trong code block |
| `--qx-code-gutter` | màu gutter hoặc metadata mờ |
| `--qx-code-divider` | divider trong code block hoặc viền nút |
| `--qx-code-button-bg` | nền nút copy code |
| `--qx-code-button-hover` | trạng thái hover của nút copy code |
| `--qx-code-button-accent` | màu accent cho icon hoặc text trong control của code |

### Ví dụ sử dụng

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

Typography không thay đổi trong bản cập nhật này.

`css/typography.css` vẫn public các token sau:

| Token | Giá trị |
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

## Các class hiện có

### Typography utilities

| Class | Tác dụng |
| --- | --- |
| `.qx-heading-tech` | tiêu đề kỹ thuật đậm dùng AWS Diatype Rounded Semi Mono |
| `.qx-heading-soft` | tiêu đề mềm hơn dùng Nunito |
| `.qx-text-body` | text body mặc định |
| `.qx-note-tech` | label uppercase theo phong cách technical |
| `.qx-note-ui` | label uppercase cho UI |
| `.qx-text-italic` | text nhấn mạnh kiểu italic |
| `.qx-code-block` | text cho code block hoặc command |
| `.qx-code-comment` | style chú thích trong code |

### Color utilities

| Class | Tác dụng |
| --- | --- |
| `.qx-bg-primary` | nền primary dùng `--qx-text-on-accent` cho text và có hover transition |
| `.qx-badge-soft-blue` | badge xanh nhạt dùng blue alpha token |

## Dark mode

Dark mode hoạt động theo token và bật khi một ancestor có `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Dark mode remap cả foundation token lẫn semantic token.</div>
  </body>
</html>
```

Bạn có thể đặt attribute này ở `html`, `body` hoặc một container riêng nếu chỉ muốn scope dark mode cho một khu vực.

## Font loading

`css/typography.css` đang nạp font từ 2 nguồn:

- Google Fonts: `JetBrains Mono`, `Nunito`, `Quicksand`
- Font local trong package: `AWS Diatype Rounded Semi Mono`, `Fragment Mono`

Khi dùng bằng npm hoặc CDN, các file `woff2` sẽ được resolve tương đối theo `css/typography.css`.

## Cách áp dụng thực tế

### Chỉ dùng foundation

Nếu dự án đã có component riêng, bạn có thể chỉ dùng reset và tokens:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
```

### Dùng full foundation

Nếu muốn dùng trọn nền tảng giao diện Quorix:

```js
import '@quorix/ui/css/index.css';
```

## Ghi chú release cho lần mở rộng này

- Thêm semantic public token cho overlay, elevated dark panel, code surface và text trên nền accent.
- Giữ nguyên toàn bộ foundation token, brand token và alpha token để đảm bảo tương thích ngược.
- Typography, font, font loading và typography utility class đều không thay đổi.
- Version bump đề xuất: `1.1.3` lên `1.2.0`.

## Quy trình phát triển

Hiện tại package này không cần build step. Các file publish chính là source file.

Quy trình thông thường:

1. Cập nhật file trong `css/` hoặc `fonts/`
2. Kiểm tra kết quả trong app local hoặc file HTML demo
3. Tăng version trong `package.json`
4. Publish lên npm
5. Push code lên GitHub

## License

MIT
