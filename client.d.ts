declare module 'virtual:pwa-register' {
    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function registerSW(
        options?: RegisterSWOptions,
    ): (reloadPage?: boolean) => Promise<void>;
}

declare module 'virtual:pwa-register/vue' {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    import type { Ref } from 'vue';

    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function useRegisterSW(options?: RegisterSWOptions): {
        needRefresh: Ref<boolean>;
        offlineReady: Ref<boolean>;
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    };
}

declare module 'virtual:pwa-register/svelte' {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    import type { Writable } from 'svelte/store';

    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function useRegisterSW(options?: RegisterSWOptions): {
        needRefresh: Writable<boolean>;
        offlineReady: Writable<boolean>;
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    };
}

declare module 'virtual:pwa-register/react' {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    import type { Dispatch, SetStateAction } from 'react';

    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function useRegisterSW(options?: RegisterSWOptions): {
        needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
        offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    };
}

declare module 'virtual:pwa-register/solid' {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    import type { Accessor, Setter } from 'solid-js';

    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function useRegisterSW(options?: RegisterSWOptions): {
        needRefresh: [Accessor<boolean>, Setter<boolean>];
        offlineReady: [Accessor<boolean>, Setter<boolean>];
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    };
}

declare module 'virtual:pwa-register/preact' {
    // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
    import type { StateUpdater } from 'preact/hooks';

    export interface RegisterSWOptions {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (
            registration: ServiceWorkerRegistration | undefined,
        ) => void;
        onRegisterError?: (error: any) => void;
    }

    export function useRegisterSW(options?: RegisterSWOptions): {
        needRefresh: [boolean, StateUpdater<boolean>];
        offlineReady: [boolean, StateUpdater<boolean>];
        updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
    };
}