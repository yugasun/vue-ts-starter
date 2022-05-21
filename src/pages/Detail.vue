<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '@/store/user';

const user = ref<{
    username?: string;
}>({});

const userStore = useUserStore();
</script>

<template>
    <h1 class="title">This is Detail Page, need login</h1>
    <p v-if="user.username" class="user-info">
        Wellcome, {{ userStore.userInfo?.username }}
    </p>
</template>

<style lang="scss" scoped>
.title {
    font-size: 32px;
    font-weight: bold;
    line-height: 100px;
}

.user-info {
    margin: 20px auto;
    font-weight: bold;
    color: green;
}
</style>
