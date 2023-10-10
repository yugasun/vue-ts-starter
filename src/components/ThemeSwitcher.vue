<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables';

function toggleTheme() {
    toggleDark();
}
</script>

<template>
    <a-button type="text" shape="circle" @click.prevent="toggleTheme">
        <span :class="isDark ? 'i-carbon-sun' : 'i-carbon-moon'" />
    </a-button>
</template>
