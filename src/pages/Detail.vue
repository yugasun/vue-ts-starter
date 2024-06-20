<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useUserStore } from '@/store/user';

const { t } = useI18n();

const userStore = useUserStore();
</script>

<template>
    <h1 class="title">{{ t('detail.loginTip') }}</h1>
    <p class="user-info">
        {{
            t('common.welcome', {
                name: userStore.userInfo?.username,
            })
        }}
    </p>
    <!-- <el-button @click="goBack">Back</el-button> -->
</template>

<style lang="scss" scoped>
.title {
    font-size: 32px;
    font-weight: bold;
    line-height: 100px;
}

.user-info {
    margin: 20px auto;
    color: green;
    font-weight: bold;
}
</style>
