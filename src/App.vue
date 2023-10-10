<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import { useUserStore } from '@/store/user';
import ReloadPrompt from '@/pwa/ReloadPrompt.vue';
import ServiceWorker from './components/ServiceWorker.vue';
import { isDark } from '@/composables';
import { theme } from 'ant-design-vue';

const userStore = useUserStore();

userStore.initUser();

const date = '__DATE__';
const timeAgo = useTimeAgo(date);

// const themeName = computed(() => (isDark.value ? 'dark' : 'light'));

const themeRef = computed(() => {
    return {
        algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
    };
});
</script>
<template>
    <a-config-provider :theme="themeRef">
        <a-layout class="h-full text-dark dark:text-light">
            <a-layout-header :style="{ background: isDark ? '#000' : '#fff' }">
                <Header />
            </a-layout-header>
            <a-layout-content class="main">
                <RouterView />
                <br />
                <ServiceWorker />
                <br />
                <div>Built at: {{ date }} ({{ timeAgo }})</div>
            </a-layout-content>
            <a-layout-footer>
                <Footer />
            </a-layout-footer>
        </a-layout>
        <ReloadPrompt />
    </a-config-provider>
</template>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 150%;
    height: 100vh;
}

.main {
    min-height: 500px;
}

.sw-msg {
    margin-top: 20px;
}
</style>
