<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import { useUserStore } from '@/store/user';
import ReloadPrompt from '@/pwa/ReloadPrompt.vue';
import ServiceWorker from './components/ServiceWorker.vue';

const userStore = useUserStore();

userStore.initUser();

const date = '__DATE__';
const timeAgo = useTimeAgo(date);
</script>
<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main class="main">
            <RouterView />
            <br />
            <ServiceWorker />
            <br />
            <div>Built at: {{ date }} ({{ timeAgo }})</div>
        </el-main>
        <el-footer>
            <Footer />
        </el-footer>
    </el-container>
    <ReloadPrompt />
</template>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 150%;
}

.main {
    min-height: 500px;
}

.sw-msg {
    margin-top: 20px;
}
</style>
