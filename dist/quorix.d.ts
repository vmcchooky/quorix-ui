/**
 * =========================================================
 * QUORIX UI - CORE JAVASCRIPT (TypeScript)
 * Version: 2.1.8 (2026) - Accessibility (A11y) Upgraded
 * =========================================================
 */
export interface ToastOptions {
    title: string;
    desc?: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    duration?: number;
    persistent?: boolean;
}
export declare class Quorix {
    private static toastContainer;
    private static previousFocus;
    private static tabIdCounter;
    static init(): void;
    private static initTabs;
    private static activateTab;
    private static setTabState;
    private static initModals;
    static openModal(id: string, triggerElement?: HTMLElement): void;
    static closeModal(id: string): void;
    private static trapTabKey;
    private static initDismiss;
    private static initScrollReveal;
    private static initScrollTop;
    private static initMediaPlayers;
    private static initAudioPlayer;
    static toast(options: ToastOptions): void;
    private static removeToast;
    private static initTheme;
}
export default Quorix;
//# sourceMappingURL=quorix.d.ts.map