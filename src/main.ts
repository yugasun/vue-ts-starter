import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import store from './store';
import router from './router';
import { updateTheme } from './utils/theme';

import '@/assets/styles/index.scss';
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss';

async function main() {
    // Start mock server
    if (import.meta.env.DEV || import.meta.env.VITE_IS_VERCEL) {
        const { worker } = await import('./mocks/index');
        worker.start();
    }

    const app = createApp(App);

    // 挂载插件
    app.use(store);
    app.use(router);
    app.use(ElementPlus);

    app.mount('#app');

    updateTheme();
}

main();
