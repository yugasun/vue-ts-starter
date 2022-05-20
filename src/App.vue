<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

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
            <el-aside width="200px">
                <Menu />
            </el-aside>
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

.el-header,
.el-footer {
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
    text-align: center;
}

.el-aside {
    background-color: var(--el-color-primary-light-8);
    color: var(--el-text-color-primary);
    text-align: center;
}
</style>
