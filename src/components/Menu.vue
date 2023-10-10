<script lang="ts" setup>
import { DownOutlined, MenuOutlined, HomeFilled } from '@ant-design/icons-vue';
</script>
<template>
    <a-dropdown class="menu-list">
        <span
            class="ant-dropdown-link cursor-pointer text-lg font-medium text-primary-dark dark:text-light"
        >
            Menus
            <DownOutlined />
        </span>
        <template #overlay>
            <a-menu>
                <a-menu-item>
                    <router-link class="menu-item" to="/">
                        <HomeFilled /> Home
                    </router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link class="menu-item" to="/detail">
                        <MenuOutlined />
                        Detail
                    </router-link>
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
<style lang="scss">
.menu-list {
    background: none;
    width: 130px;
    margin-left: 20px;

    .menu-item {
        width: 100px;
    }
}
</style>
