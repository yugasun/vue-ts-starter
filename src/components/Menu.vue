<script lang="ts" setup>
import { Menu as IconMenu, HomeFilled } from '@element-plus/icons-vue';
</script>
<template>
    <el-menu default-active="/" class="menu" mode="horizontal" :router="true">
        <el-menu-item index="/">
            <template #title>
                <el-icon><HomeFilled /></el-icon>
                <span>Home</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/detail">
            <template #title>
                <el-icon><icon-menu /></el-icon>
                <span>Detail</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>
<style lang="scss">
.menu {
    position: absolute;
    left: 10px;
    top: 5px;
    background: none;
    width: 400px;
    border: none;
    height: 48px;

    .el-menu-item {
        border: none;

        &.is-active {
            border: none !important;
        }
    }
}
</style>
