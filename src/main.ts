import { createApp } from 'vue';

import App from './App.vue';
import { store } from './store';
import { router } from './router';
import { i18n } from './i18n';
import { updateTheme } from './utils/theme';

import 'uno.css';
import '@/assets/styles/index.scss';
// If you want to use ElMessage, import it.

async function main() {
    // Start mock server
    if (import.meta.env.DEV || import.meta.env.VITE_IS_VERCEL) {
        const { worker } = await import('./mocks/index');
        worker.start({ onUnhandledRequest: 'bypass' });
    }

    const app = createApp(App);

    // load plugins
    app.use(store);
    app.use(router);
    app.use(i18n);

    app.mount('#app');

    updateTheme();
}

main();
