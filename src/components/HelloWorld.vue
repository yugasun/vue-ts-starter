<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/store/user';

defineProps<{ msg: string }>();

const { t } = useI18n();
const userStore = useUserStore();
</script>

<template>
    <h1 class="text-lg text-primary-dark dark:text-ternary-light">{{ msg }}</h1>
    <p
        v-if="userStore.isLogin"
        class="text-primary-dark dark:text-ternary-light"
    >
        {{
            t('common.welcome', {
                name: userStore.userInfo?.username,
            })
        }}
    </p>
    <p class="text-primary-dark dark:text-ternary-light">
        {{ t('home.recommendIde') }}:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p
        class="text-primary-dark dark:text-ternary-light"
        v-html="t('home.remarks')"
    ></p>
</template>

<style scoped>
a {
    color: var(--link-color);
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
}
</style>
