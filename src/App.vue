<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';

const router = useRouter();
const route = useRoute();

const userStore = useUserStore();

userStore.initUser();

function goBack() {
    router.back();
}
</script>
<template>
    <el-container>
        <el-header>
            <Header />
        </el-header>
        <el-container>
            <el-container>
                <el-main class="main">
                    <el-page-header
                        v-if="route.path !== '/'"
                        :content="(route.name as string)"
                        @back="goBack"
                    />
                    <RouterView />
                </el-main>
                <el-footer>
                    <Footer />
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    line-height: 150%;
}

.main {
    min-height: 500px;
}

.el-header {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
    position: relative;
}
</style>
