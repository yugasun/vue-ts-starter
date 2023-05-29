<script lang="ts" setup>
import { useTimeAgo } from '@vueuse/core';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

userStore.initUser();

const date = '__DATE__';
const timeAgo = useTimeAgo(date);
</script>
<template>
    <div class="container">
        <header>Header</header>
        <main class="main">
            <RouterView />
            <br />
            <div>Built at: {{ date }} ({{ timeAgo }})</div>
        </main>
        <footer>Footer</footer>
    </div>
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
