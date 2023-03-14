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
    <el-button :circle="true" @click.prevent="toggleLocales">
        <div i-carbon-language />
    </el-button>
</template>
