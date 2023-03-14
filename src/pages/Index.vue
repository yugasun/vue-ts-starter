<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import HelloWorld from '@/components/HelloWorld.vue';
import VueUse from '@/components/VueUse.vue';

const { t } = useI18n();
</script>

<template>
    <img alt="Vue logo" src="@/assets/images/logo.png" class="w-30" />
    <HelloWorld :msg="t('common.hello')" />
    <VueUse />
</template>

<style lang="scss"></style>
