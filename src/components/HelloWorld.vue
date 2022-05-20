<script setup lang="ts">
import { ref } from 'vue';

import UserInfo from './UserInfo.vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
    <h1>{{ msg }}</h1>
    <UserInfo />
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
            >Volar</a
        >
    </p>

    <p>See <code>README.md</code> for more information.</p>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
