<script lang="ts" setup>
import LoginButton from '../LoginButton.vue';
import ThemeSwitcher from '../ThemeSwitcher.vue';
import Menu from '../Menu.vue';
</script>
<template>
    <nav class="header-nav flex flex-row justify-center items-center">
        <div class="nav-left flex flex-row justify-between items-center">
            <router-link to="/" class="flex justify-center items-center">
                <img
                    alt="Vue logo"
                    src="@/assets/images/logo.png"
                    class="logo"
                />
            </router-link>

            <Menu />
        </div>
        <h3
            class="title text-lg font-medium text-primary-dark dark:text-ternary-light"
        >
            Vue3 + TypeScript + Vite Template
        </h3>
        <div class="nav-right flex flex-row justify-between items-center">
            <LoginButton />
            <ThemeSwitcher class="switch-icon" />
        </div>
    </nav>
</template>
<style lang="scss" scoped>
.header-nav {
    width: 100%;
    height: 100%;
}

.nav-left {
    position: absolute;
    left: 50px;
    top: 12px;
}

.logo {
    width: 30px;
    height: 30px;
}

.nav-items {
    margin-left: 10px;
}

.nav-right {
    position: absolute;
    right: 50px;
    top: 12px;
}

.title {
    line-height: 60px;
    font-size: 26px;
    font-weight: bold;
}

.switch-icon {
    margin-left: 20px;
}
</style>
