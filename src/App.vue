<script lang="ts" setup>
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

userStore.initUser();
</script>
<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-main class="main">
            <RouterView />
        </el-main>
        <el-footer>
            <Footer />
        </el-footer>
    </el-container>
</template>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 150%;
}

.main {
    min-height: 500px;
}

.el-header {
    text-align: center;
    position: relative;
}
</style>
