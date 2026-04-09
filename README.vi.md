<div align="center">
  <h1>@quorix/ui</h1>
  <p><strong>Design System & UI Toolkit chính thức của Quorix Vietnam</strong></p>

  [![NPM Version](https://img.shields.io/npm/v/@quorix/ui/latest.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@quorix/ui)
  [![License](https://img.shields.io/npm/l/@quorix/ui?style=flat-square&color=green)](https://github.com/vmcchooky/quorix-ui/blob/main/LICENSE)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![WCAG 2.1 AA](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-success?style=flat-square)](#tieu-chuan-tiep-can-wcag-21-aa)
</div>

<br />

**@quorix/ui** cung cấp một giải pháp toàn diện, cực nhẹ và không phụ thuộc (zero-dependency) để xây dựng các giao diện người dùng hiện đại. Được phát triển riêng cho hệ sinh thái của Quorix Vietnam, bộ khung này là sự giao thoa hoàn hảo giữa tính thẩm mỹ cao cấp và các tiêu chuẩn kỹ thuật khắt khe.

👀 **Trải nghiệm Demo & Showcase:** [Xem bản Visualization chính thức của Quorix UI](https://vmcchooky.github.io/quorix-ui/visualization.html)

## ✨ Tại sao nên chọn Quorix UI?

*   **Zero Dependencies:** Lõi TypeScript được viết tự thân hoàn toàn. Chúng tôi đảm bảo hiệu suất tối ưu và loại trừ rủi ro (side-effects) từ các thư viện bên thứ ba.
*   **Thiết kế hiện đại (High-end Aesthetics):** Ứng dụng khéo léo phong cách thiết kế *Glassmorphism* kết hợp hệ thống phân lớp *Spatial* tạo cảm giác có chiều sâu và cao cấp.
*   **Tích hợp Icons tối ưu:** Tích hợp mượt mà với [Lucide Icons](https://lucide.dev/). Sử dụng thuộc tính CSS `currentColor` để các icon tự động đồng bộ màu sắc theo ngữ cảnh mà không làm nặng tiến trình render.
*   **Tree-shakeable Exports:** Được build sẵn bằng `esbuild`, hỗ trợ đồng thời module ESM, CJS giúp tối ưu kích thước bundle của dự án.

---

## 🚀 Hướng dẫn cài đặt (Quick Start)

### 1. Cài đặt qua NPM (Khuyên dùng)

```bash
npm install @quorix/ui
```

### 2. Tích hợp vào dự án

Nhúng các module cốt lõi vào file entry chính của dự án:

```javascript
// Nhúng CSS tổng
import '@quorix/ui/dist/quorix.min.css';

// Nhúng Javascript lõi để xử lý tương tác
import '@quorix/ui/dist/quorix.min.js';
```

#### Sử dụng CSS Module riêng lẻ
Nếu bạn muốn tối ưu kích thước hơn nữa, Quorix UI hỗ trợ import theo từng phần:
```javascript
import '@quorix/ui/css/colors';
import '@quorix/ui/css/components';
import '@quorix/ui/css/animations';
```

### Sử dụng qua CDN
Để tạo prototype nhanh gọn nhất, bạn có thể nhúng trực tiếp qua mạng lưới unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/@quorix/ui@latest/dist/quorix.min.css">
<script src="https://unpkg.com/@quorix/ui@latest/dist/quorix.min.js" defer></script>
```

---

## 🏗️ Cấu trúc kiến trúc phân tầng

Kiến trúc CSS tại `src/css/` được cấu trúc cực kỳ chặt chẽ thành 13 nền tảng cốt lõi, giúp dễ bảo trì và dễ dàng mở rộng khi hệ thống phình to:

| Module | Tầng quản lý | Mô tả chi tiết |
| :--- | :--- | :--- |
| **`index.css`** | **Entry** | File tổng để kết nối và gọi tất cả các module con. |
| **`reset.css`** | **Base** | Reset chuẩn hóa mọi hành vi mặc định của trình duyệt (box-sizing). |
| **`colors.css`** | **Tokens** | Định nghĩa biến CSS cho hệ thống màu Semantic. |
| **`typography.css`** | **Tokens** | Thiết lập fonts chữ, type scales và line-heights chuẩn xác. |
| **`metrics.css`** | **Tokens** | Các thông số khoảng cách spacing, lưới breakpoints và spatial shadows (đổ bóng). |
| **`primitives.css`** | **Atoms** | Các thành phần đơn nguyên: Buttons, Cards, Badges, Dividers. |
| **`editorial.css`** | **Atoms** | Bề mặt hiển thị văn bản thuần, tối ưu cho blocks chữ, codeblocks dài. |
| **`forms.css`** | **Molecules** | Các nhóm thẻ nhập liệu biểu mẫu: Inputs, Selects, Checkboxes, Toggle switch. |
| **`layout.css`** | **Molecules** | Nhóm cấu trúc khối lớn: Navbars, Sidebars, hệ thống CSS Grid. |
| **`components.css`** | **Organisms** | Tổ hợp UI phức tạp: Bảng dữ liệu (Tables), Avatars, Progress, Toasts, Hệ thống Tabs. |
| **`animations.css`** | **Motion** | Định nghĩa chuyển động mượt mà, vi tương tác (micro-interactions). |
| **`utilities.css`** | **Helpers** | Cung cấp một số class tiện ích nhỏ nhặt (giống Tailwind), tiêu biểu như class `.qx-glass`. |
| **`icons.css`** | **Assets** | Căn chỉnh tỉ lệ khung của đối tượng SVG, layer giúp tích hợp Lucide gọn gàng. |

---

## ♿ Tiêu chuẩn tiếp cận (WCAG 2.1 AA)

Tính phổ quát và dễ sử dụng luôn là ưu tiên hàng đầu. Quorix UI được thiết kế tuân thủ khắt khe chuẩn tiếp cận **WCAG 2.1 AA**:

*   **Opt-in Motion Engine:** Animation chỉ được phép kích hoạt nếu an toàn. Nếu trình duyệt của người dùng cấu hình giảm thiểu chuyển động, chúng tôi sẽ tuân theo:
    ```css
    @media (prefers-reduced-motion: no-preference) { /* Animation an toàn */ }
    ```
*   **Color Contrast:** Mọi text phụ trợ (secondary text) cũng như đường ranh giới linh kiện luôn được duy trì tỷ lệ tương phản tối thiểu là `4.5:1` so với nền.
*   **Screen Readers thông minh (Hệ sinh thái Toast):**
    *   Các thông báo thông thường được bọc `aria-live="polite"`.
    *   Các thông báo báo lỗi quan trọng được đẩy lên `assertive` kèm thuộc tính `role="alert"` để chiếm luồng của trình đọc màn hình ngay lập tức.
*   **Typography FOUT:** Giảm thiểu triệt để sự cố giật thay đổi font (FOUT - Flash of Unstyled Text) bằng chuỗi dự phòng (`AWS Diatype -> Nunito -> ui-rounded`) đi đôi với `font-display: swap`.

### 🔍 Sự minh bạch (Known Limitations & Testing)

Để duy trì tính minh bạch cho một dự án mã nguồn mở, chúng tôi khuyến cáo rõ các giới hạn sau:

1.  **Bẫy con trỏ (Focus Trapping):** Việc bẫy sự kiện phím Tab để focus không bị nhảy ra ngoài thẻ Modals đòi hỏi người dùng **phải bật JavaScript**. Không thể bẫy focus an toàn nếu chỉ dùng mỗi CSS.
2.  **Môi trường đã test Screen Reader:**
    *   **Windows:** Công cụ NVDA kết hợp Google Chrome.
    *   **macOS:** Công cụ VoiceOver kết hợp Apple Safari.
3.  **Kêu gọi cộng đồng:** *Team phát triển đang liên tục giám sát runtime tab-order. Nếu bạn phát hiện lỗi hệ thống focus bị sai luồng hoặc DOM bị nhảy lệch, vui lòng [mở Issue trên nền tảng GitHub](https://github.com/vmcchooky/quorix-ui/issues).*

---

## 🛠️ Ví dụ sử dụng (Code Example)

Cấu trúc giao diện cơ bản của một thẻ Card mang phong cách Glassmorphism:

```html
<div class="qx-card qx-glass p-6 max-w-sm">
  <div class="qx-card-header pb-4 border-b">
    <h3 class="font-semibold text-lg text-primary">Cập nhật hệ thống</h3>
  </div>
  <div class="qx-card-body pt-4">
    <p class="text-secondary mb-4">Phiên bản 2.1.3 đã sẵn sàng để tải xuống.</p>
    <button class="qx-btn qx-btn-primary flex items-center gap-2">
      <i class="lucide-download" aria-hidden="true"></i>
      Tải ngay
    </button>
  </div>
</div>
```

---

<div align="center">
  <p>Được phát triển với ❤️ bởi <b>Võ Mạnh Cường</b> & <b>Quorix Vietnam</b>.</p>
  <p><a href="https://github.com/vmcchooky/quorix-ui">Xem mã nguồn trên GitHub</a> • Phát hành dưới bản quyền MIT.</p>
</div>
