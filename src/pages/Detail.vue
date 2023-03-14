<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const { t } = useI18n();
const router = useRouter();

const userStore = useUserStore();

function goBack() {
    router.back();
}
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
    font-weight: bold;
    color: green;
}
</style>
