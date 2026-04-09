/**
 * =========================================================
 * QUORIX UI - CORE JAVASCRIPT (TypeScript)
 * Version: 2.1 (2026) - Accessibility (A11y) Upgraded
 * =========================================================
 */

export interface ToastOptions {
    title: string;
    desc?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    persistent?: boolean;
}

export class Quorix {
    private static toastContainer: HTMLElement | null = null;
    private static previousFocus: HTMLElement | null = null; // Lưu phần tử trước khi mở Modal

    static init(): void {
        this.initTheme();
        this.initTabs();
        this.initModals();
        this.initDismiss();
        this.initScrollReveal();

        console.log('%cQuorix UI 2.1 Core Initialized 🚀 (A11y Ready)', 'color:#00f0ff;font-weight:600');
    }

    // =============================================
    // TABS
    // =============================================
    private static initTabs(): void {
        document.querySelectorAll<HTMLElement>('[data-qx-tab]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = tab.dataset.qxTab;
                const groupName = tab.dataset.qxTabGroup;
                if (!targetId || !groupName) return;

                document.querySelectorAll(`[data-qx-tab-group="${groupName}"]`).forEach(t => t.classList.remove('is-active'));
                document.querySelectorAll(`[data-qx-pane-group="${groupName}"]`).forEach(p => p.classList.add('qx-d-none'));

                tab.classList.add('is-active');
                document.getElementById(targetId)?.classList.remove('qx-d-none');
            });
        });
    }

    // =============================================
    // MODALS & ACCESSIBILITY (FOCUS TRAP)
    // =============================================
    private static initModals(): void {
        document.querySelectorAll<HTMLElement>('[data-qx-modal-target]').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = trigger.dataset.qxModalTarget;
                if (targetId) this.openModal(targetId, trigger);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector<HTMLElement>('.qx-dialog-backdrop:not(.qx-d-none)');
                if (openModal) this.closeModal(openModal.id);
            }
        });
    }

    static openModal(id: string, triggerElement?: HTMLElement): void {
        const modal = document.getElementById(id);
        if (!modal) return;

        // Lưu lại vị trí con trỏ hiện tại để trả về khi đóng Modal
        this.previousFocus = triggerElement || (document.activeElement as HTMLElement);

        modal.classList.remove('qx-d-none');
        document.body.style.overflow = 'hidden';

        // Ép các thuộc tính ARIA cho Trình đọc màn hình
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('role', 'dialog');

        // Bẫy phím Tab (Focus Trap)
        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        modal.addEventListener('keydown', this.trapTabKey);
    }

    static closeModal(id: string): void {
        const modal = document.getElementById(id);
        if (!modal) return;

        modal.classList.add('qx-d-none');
        document.body.style.overflow = '';
        modal.removeEventListener('keydown', this.trapTabKey);

        // Trả lại con trỏ về vị trí cũ (Rất quan trọng cho UX)
        if (this.previousFocus) {
            this.previousFocus.focus();
        }
    }

    private static trapTabKey = (e: KeyboardEvent): void => {
        if (e.key !== 'Tab') return;

        const modal = e.currentTarget as HTMLElement;
        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstEl) {
                lastEl.focus();
                e.preventDefault();
            }
        } else { // Phím Tab
            if (document.activeElement === lastEl) {
                firstEl.focus();
                e.preventDefault();
            }
        }
    };

    // =============================================
    // DISMISS
    // =============================================
    private static initDismiss(): void {
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const dismissBtn = target.closest('[data-qx-dismiss]');
            if (!dismissBtn) return;

            const selector = (dismissBtn as HTMLElement).dataset.qxDismiss;
            if (selector) {
                const el = document.querySelector<HTMLElement>(selector);
                if (el?.classList.contains('qx-dialog-backdrop')) {
                    this.closeModal(el.id);
                } else if (el?.classList.contains('qx-toast')) {
                    this.removeToast(el);
                } else {
                    el?.classList.add('qx-d-none');
                }
            } else {
                const parentModal = dismissBtn.closest('.qx-dialog-backdrop');
                if (parentModal) this.closeModal(parentModal.id);

                const parentToast = dismissBtn.closest('.qx-toast');
                if (parentToast) this.removeToast(parentToast as HTMLElement);
            }
        });
    }

    // =============================================
    // SCROLL REVEAL
    // =============================================
    private static initScrollReveal(): void {
        const reveals = document.querySelectorAll<HTMLElement>('.qx-reveal, .qx-reveal-stagger');
        if (reveals.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

        reveals.forEach(el => observer.observe(el));
    }

    // =============================================
    // TOAST NOTIFICATION
    // =============================================
    static toast(options: ToastOptions): void {
        const { title, desc = '', type = 'info', duration = 4000, persistent = false } = options;

        if (!this.toastContainer) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.className = 'qx-toast-container';
            document.body.appendChild(this.toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `qx-toast qx-toast-${type}`;
        
        // Cập nhật theo chuẩn A11y: Chỉ Assertive/Alert khi có LỖI
        const isError = type === 'error';
        toast.setAttribute('role', isError ? 'alert' : 'status');
        toast.setAttribute('aria-live', isError ? 'assertive' : 'polite');

        // ... (Phần map icon và innerHTML bên dưới giữ nguyên)
        const iconMap: Record<string, string> = {
            success: '<i data-lucide="check-circle-2" class="qx-icon"></i>',
            error: '<i data-lucide="alert-circle" class="qx-icon"></i>',
            warning: '<i data-lucide="alert-triangle" class="qx-icon"></i>',
            info: '<i data-lucide="info" class="qx-icon"></i>'
        };

        toast.innerHTML = `
            <div class="qx-toast-icon">${iconMap[type]}</div>
            <div class="qx-toast-content">
                <div class="qx-toast-title">${title}</div>
                ${desc ? `<div class="qx-toast-desc">${desc}</div>` : ''}
            </div>
            <button class="qx-toast-close" data-qx-dismiss aria-label="Đóng thông báo">✕</button>
        `;

        this.toastContainer.appendChild(toast);

        if ((window as any).lucide) {
            (window as any).lucide.createIcons({ node: toast, attrs: { 'stroke-width': 2.5 } });
        }

        if (!persistent && duration > 0) {
            setTimeout(() => this.removeToast(toast), duration);
        }
    }

    private static removeToast(toast: HTMLElement): void {
        toast.classList.add('qx-toast-hiding');
        setTimeout(() => toast.remove(), 350);
    }

    // =============================================
    // THEME
    // =============================================
    private static initTheme(): void {
        const saved = localStorage.getItem('qx-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        document.documentElement.setAttribute('data-theme', saved);

        document.querySelectorAll<HTMLElement>('[data-qx-theme-toggle]').forEach(btn => {
            btn.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('qx-theme', next);
            });
        });
    }
}

// Auto init
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => Quorix.init());
    (window as any).Quorix = Quorix;
}

export default Quorix;