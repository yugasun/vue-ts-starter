import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import store from './store';
import router from './router';

import '@/assets/styles/index.scss';

async function main() {
    // Start mock server
    if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('./mocks/index');
        worker.start();
    }

    const app = createApp(App);

    // 挂载插件
    app.use(store);
    app.use(router);
    app.use(ElementPlus);

    app.mount('#app');
}

main();
