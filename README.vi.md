# Quorix UI

Quorix UI là nền tảng giao diện dùng chung cho `quorix-vietnam` và các dự án Quorix sau này. Đây là một package CSS nhẹ, không phụ thuộc framework, dùng để phân phối reset, color tokens, typography tokens và một số utility class cơ bản.

Bản cập nhật này giữ nguyên toàn bộ typography, đồng thời làm lại hệ màu theo hướng mềm hơn và editorial hơn:

- light mode gợi cảm giác giấy ấm, sổ tay kem, bề mặt đọc dễ chịu
- dark mode là xanh xám đậm có chiều sâu, không phải đen gắt
- màu thương hiệu vẫn là Quorix nhưng bớt gắt khi dùng hằng ngày
- tên token cũ vẫn được giữ để đảm bảo tương thích ngược

Bản tiếng Anh dành cho GitHub và npm nằm ở [README.md](./README.md).

## Thông tin package

- Package: `@quorix/ui`
- Repository: [vmcchooky/quorix-ui](https://github.com/vmcchooky/quorix-ui)
- License: `MIT`
- Phiên bản nên phát hành cho lần làm mới palette này: `1.1.2`

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

Hoặc khóa theo một release cụ thể như `1.1.2`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@quorix/ui@1.1.2/css/index.css"
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
      <h1 class="qx-heading-tech">Nen tang editorial cho cac site Quorix</h1>
      <p class="qx-text-body">
        Dung chung reset, ngon ngu typography va bang mau giao dien da duoc lam
        mem hon cho blog, dashboard, card va mat doc.
      </p>
      <p class="qx-text-body demo-meta">
        Light mode am nhu giay, dark mode la be mat xanh xam co chieu sau.
      </p>
      <span class="qx-badge-soft-blue qx-note-ui">San sang</span>
      <button class="demo-button qx-bg-primary">Primary action</button>
    </section>
  </body>
</html>
```

## Hệ màu

`css/colors.css` hiện định nghĩa một palette editorial mềm hơn, phù hợp cho:

- nền trang
- card và panel
- hover state
- soft badge
- metadata accent tinh tế
- giao diện đọc bài
- nền highlight nhẹ
- border nhìn rõ nhưng không gắt

### Token light theme

| Token | Giá trị |
| --- | --- |
| `--qx-bg-base` | `#D8C1A0` |
| `--qx-bg-surface` | `#CCB086` |
| `--qx-bg-surface-hover` | `#BE9D6C` |
| `--qx-text-main` | `#43382D` |
| `--qx-text-muted` | `#746759` |
| `--qx-border` | `#A88E68` |

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

Đây vẫn là bộ màu brand mặc định, nhưng đã được làm dịu hơn để dùng tốt hơn trong UI hằng ngày.

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

Toàn bộ alpha token đã được tạo lại từ màu brand mới ở mức opacity 10%.

| Token | Giá trị |
| --- | --- |
| `--qx-brand-red-alpha-10` | `#E67A861A` |
| `--qx-brand-blue-alpha-10` | `#6D8EEB1A` |
| `--qx-brand-yellow-alpha-10` | `#D9A4411A` |
| `--qx-brand-green-alpha-10` | `#58A67A1A` |

## Typography

Typography không thay đổi trong lần cập nhật màu này.

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
| `.qx-bg-primary` | nền primary dùng brand red, chữ trắng, có hover transition |
| `.qx-badge-soft-blue` | badge xanh nhạt dùng alpha token mới |

## Dark mode

Dark mode hoạt động theo token và bật khi một ancestor có `data-theme="dark"`.

```html
<html data-theme="dark">
  <body>
    <div class="qx-text-body">Noi dung se dung dark tokens.</div>
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

.card:hover {
  background: var(--qx-bg-surface-hover);
}

.meta-badge {
  background: var(--qx-brand-blue-alpha-10);
  color: var(--qx-brand-blue);
}
```

## Ghi chú release cho lần cập nhật này

- Typography, font, font token và typography class đều giữ nguyên.
- Tên public color token được giữ để đảm bảo tương thích ngược.
- `css/colors.css` là file thay đổi chính trong lần cập nhật hình ảnh nền tảng này.
- Version bump gợi ý: `1.1.1` lên `1.1.2`.

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
