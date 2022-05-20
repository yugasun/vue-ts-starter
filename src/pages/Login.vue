<script lang="ts" setup>
import { toast } from '@/utils/toast';
import API from '@/api';
import { ref } from 'vue';

const user = ref<{
    username?: string;
}>({});

async function submitLogin() {
    const res = await API.login('test', '123');
    console.log('res', res);
    if (res.code === 0) {
        toast({
            type: 'success',
            message: 'Login success',
        });
        const res = await API.getUser();
        user.value = res.data;
    } else {
        toast({
            type: 'error',
            message: 'Login Fail',
        });
    }
}
</script>

<template>
    <h1 class="title">This is Login Page</h1>
    <p v-if="user.username" class="user-info">Wellcome, {{ user.username }}</p>
    <el-button @click="submitLogin">Login</el-button>
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
