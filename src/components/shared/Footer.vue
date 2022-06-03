<script lang="ts" setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>
<template>
    <div class="footer text-primary-dark dark:text-ternary-light">
        @{{ year }}
        <a href="https://github.com/yugasun/vue-template" target="_blank">
            Github
        </a>
        |
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
            Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </div>
</template>
<style lang="scss" scoped>
.footer {
    line-height: 60px;
    font-size: 16px;
}
</style>
