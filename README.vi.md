# Quorix UI

Quorix UI là bộ CSS Design System Toolkit nhẹ, dùng để tạo nền tảng giao diện dùng chung cho `quorix-vietnam` và các dự án sau này.

Package hiện tại tập trung vào:

- CSS reset
- hệ màu và design tokens
- hệ typography và font
- một số utility class cơ bản
- phân phối qua npm hoặc CDN

Bản tiếng Anh dùng cho GitHub và npm nằm ở [README.md](./README.md).

## Thông tin package

- Package: `@quorix/ui`
- Version hiện tại: `1.0.1`
- Repository: [vmcchooky/quorix-ui](https://github.com/vmcchooky/quorix-ui)
- License: `MIT`

## Cấu trúc hiện tại

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

`css/index.css` là entry point chính, import theo thứ tự:

1. `reset.css`
2. `colors.css`
3. `typography.css`

## Cách sử dụng

### Cài đặt bằng npm

```bash
npm install @quorix/ui
```

Import toàn bộ toolkit:

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

Import full:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.0.1/css/index.css"
/>
```

Import riêng từng file:

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

Nếu muốn luôn lấy version mới nhất đã publish, thay `@1.0.1` bằng `@latest`.

## Ví dụ nhanh

```html
<!doctype html>
<html lang="vi">
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
      <h1 class="qx-heading-tech">Nền tảng giao diện dùng chung</h1>
      <p class="qx-text-body">
        Dùng chung reset, typography và color tokens cho nhiều dự án.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">Sẵn sàng</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Design Tokens

### Màu sắc

Có trong `css/colors.css`.

| Token | Giá trị |
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

### Typography

Có trong `css/typography.css`.

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

### Typography classes

| Class | Tác dụng |
| --- | --- |
| `.qx-heading-tech` | tiêu đề kỹ thuật, đậm, dùng AWS Diatype Rounded Semi Mono |
| `.qx-heading-soft` | tiêu đề mềm hơn, dùng Nunito |
| `.qx-text-body` | text body mặc định |
| `.qx-note-tech` | label uppercase theo phong cách technical |
| `.qx-note-ui` | label uppercase cho UI |
| `.qx-text-italic` | text nhấn mạnh kiểu italic |
| `.qx-code-block` | text cho code block hoặc command |
| `.qx-code-comment` | style chú thích trong code |

### Utility classes

| Class | Tác dụng |
| --- | --- |
| `.qx-bg-primary` | nền màu primary, chữ trắng, có hover state |
| `.qx-badge-soft-blue` | badge xanh nhạt |

## Dark mode

Dark mode kích hoạt khi một ancestor có `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Nội dung sẽ dùng dark tokens.</div>
  </body>
</html>
```

Có thể đặt attribute này trên `html`, `body`, hoặc trên một container riêng nếu chỉ muốn scope dark mode cho một khu vực.

## Font loading

`css/typography.css` đang nạp font từ 2 nguồn:

- Google Fonts: `JetBrains Mono`, `Nunito`, `Quicksand`
- Font local trong package: `AWS Diatype Rounded Semi Mono`, `Fragment Mono`

Khi dùng bằng npm hoặc CDN, các file `.woff2` sẽ được resolve tương đối theo `css/typography.css`.

## Cách áp dụng thực tế

### Chỉ dùng foundation

Nếu dự án đã có component riêng, bạn có thể dùng reset và tokens:

```js
import '@quorix/ui/css/reset.css';
import '@quorix/ui/css/colors.css';
```

### Dùng full brand foundation

Nếu muốn một mặt bằng giao diện Quorix đồng bộ, dùng:

```js
import '@quorix/ui/css/index.css';
```

### Dùng token trong app

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

## Quy trình phát triển

Hiện tại package này không cần build step. Các file publish chính là source file.

Quy trình thông thường:

1. Cập nhật file trong `css/` hoặc `fonts/`
2. Test trong app local hoặc một file HTML demo
3. Tăng version trong `package.json`
4. Publish lên npm
5. Push code lên GitHub

## Hướng mở rộng tiếp theo

Toolkit hiện tại mới là tầng foundation. Các bước hợp lý tiếp theo:

- spacing và sizing tokens
- border radius và shadow tokens
- button, input, card, badge, alert
- layout utilities
- theme presets
- website tài liệu có live preview

## License

MIT
