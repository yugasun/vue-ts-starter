<template>
    <h2>Hello, {{ userStore.name }}</h2>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
</script>
