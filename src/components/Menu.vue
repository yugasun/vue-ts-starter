<script lang="ts" setup>
import { ref } from 'vue';
import { Menu as IconMenu, HomeFilled } from '@element-plus/icons-vue';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>
<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :router="true"
    >
        <el-menu-item index="/">
            <template #title>
                <el-icon><HomeFilled /></el-icon>
                <span>Home</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/login">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>Login</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>
<style lang="scss" scoped></style>
