<script lang="ts" setup>
import { ref } from 'vue';

import { toast } from '@/utils/toast';
import API from '@/api';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const loginRef = ref();
const isLoginDialogVisible = ref(false);
const isLogoutDialogVisible = ref(false);
const formData = ref({
    username: 'admin',
    password: 'admin',
});

function showLoginDialog() {
    isLoginDialogVisible.value = true;
}

async function submitLogin() {
    const res = await API.login('test', '123');
    console.log('res', res);
    if (res.code === 0) {
        toast({
            type: 'success',
            content: 'Login success',
        });
        const userRes = await API.getUser();
        userStore.updateUser(userRes.data);

        isLoginDialogVisible.value = false;
    } else {
        toast({
            type: 'error',
            content: 'Login Fail',
        });
    }
}

function logout() {
    isLogoutDialogVisible.value = true;
}

function logoutConfirm() {
    userStore.updateUser(null);
    isLogoutDialogVisible.value = false;
}

const loginContainer = () => loginRef.value || document.body;
</script>

<template>
    <div ref="loginRef" class="user-info">
        <a-button v-if="userStore.isLogin" @click="logout">Logout</a-button>
        <a-button v-else id="login-btn" @click="showLoginDialog">
            Login
        </a-button>
    </div>

    <!-- login dialog -->
    <a-modal
        v-model:open="isLoginDialogVisible"
        wrap-class-name="login-dialog"
        title="Login"
        :get-container="loginContainer"
    >
        <a-form :model="formData">
            <a-form-item label="Username">
                <a-input v-model:value="formData.username" autocomplete="off" />
            </a-form-item>
            <a-form-item label="Password">
                <a-input
                    v-model:value="formData.password"
                    autocomplete="off"
                    type="password"
                    show-password
                />
            </a-form-item>
        </a-form>
        <template #footer>
            <span class="dialog-footer">
                <a-button @click="isLoginDialogVisible = false"
                    >Cancel</a-button
                >
                <a-button type="primary" @click="submitLogin">Confirm</a-button>
            </span>
        </template>
    </a-modal>

    <!-- logout dialog -->
    <a-modal v-model:open="isLogoutDialogVisible" title="Logout">
        <span>Do you confirm to logout?</span>
        <template #footer>
            <span class="dialog-footer">
                <a-button @click="isLogoutDialogVisible = false"
                    >Cancel</a-button
                >
                <a-button type="primary" @click="logoutConfirm"
                    >Confirm</a-button
                >
            </span>
        </template>
    </a-modal>
</template>
<style lang="scss" scoped>
.user-info {
    display: flex;

    .user {
        margin-right: 20px;
        line-height: 32px;
    }
}
</style>
