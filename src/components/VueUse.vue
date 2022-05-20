<script lang="ts" setup>
import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
</script>
<template>
    <h1 class="title">Test VueUse for Mouse Event</h1>
    <h3>Mouse: {{ x }}, {{ y }}</h3>
</template>
<style lang="scss" scoped>
.title {
    margin-top: 20px;
}
</style>
