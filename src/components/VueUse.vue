<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core';

const { isSupported, open, sRGBHex } = useEyeDropper();
</script>
<template>
    <section
        v-if="isSupported"
        class="text-primary-dark dark:text-ternary-light"
    >
        <h3 class="title font-bold">Vueuse Example</h3>
        <div>isSupported: {{ isSupported }}</div>
        <div>
            sRGBHex: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span>
        </div>
    </section>
    <div>
        <el-button :disabled="!isSupported" @click="() => open()">
            {{
                isSupported
                    ? 'Open Eye Dropper'
                    : 'Not Supported by Your Browser'
            }}
        </el-button>
    </div>
</template>
<style lang="scss" scoped>
.title {
    margin-top: 20px;
}
</style>
