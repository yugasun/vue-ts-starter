<script lang="ts" setup>
import { ref } from 'vue';
import { toast } from '@/utils/toast';
import API from '@/api';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const isDialogVisible = ref(false);
const formData = ref({
    username: 'admin',
    password: 'admin',
});

function showLoginDialog() {
    isDialogVisible.value = true;
}

async function submitLogin() {
    const res = await API.login('test', '123');
    console.log('res', res);
    if (res.code === 0) {
        toast({
            type: 'success',
            message: 'Login success',
        });
        const res = await API.getUser();

        userStore.updateUser(res.data);

        isDialogVisible.value = false;
    } else {
        toast({
            type: 'error',
            message: 'Login Fail',
        });
    }
}

function logout() {
    userStore.updateUser(null);
}
</script>

<template>
    <div class="user-info">
        <h2 v-if="userStore.isLogin" class="user">
            Hello, {{ userStore.userInfo?.username }}
        </h2>
        <el-button v-else @click="showLoginDialog">Login</el-button>
        <el-popconfirm title="Are you sure to logout?" @confirm="logout">
            <template #reference>
                <el-button v-if="userStore.isLogin">Logout</el-button>
            </template>
        </el-popconfirm>
    </div>

    <el-dialog v-model="isDialogVisible" title="Login">
        <el-form :model="formData">
            <el-form-item label="Username">
                <el-input v-model="formData.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input
                    v-model="formData.password"
                    autocomplete="off"
                    type="password"
                    show-password
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="isDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="submitLogin"
                    >Confirm</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>
<style lang="scss" scoped>
.user-info {
    position: absolute;
    right: 50px;
    top: 12px;
    display: flex;

    .user {
        margin-right: 20px;
        line-height: 32px;
    }
}
</style>
