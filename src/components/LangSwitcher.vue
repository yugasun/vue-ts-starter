<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t, availableLocales, locale } = useI18n();

function toggleLocales() {
    // change to some real logic
    const locales = availableLocales;
    locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
}
</script>

<template>
    <a-button type="text" shape="circle" @click.prevent="toggleLocales">
        <span i-carbon-language />
    </a-button>
</template>
