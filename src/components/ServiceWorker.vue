<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import SWorker from '@/worker?worker';

const pong = ref<string | undefined>(undefined);
const mode = ref<string | undefined>(undefined);
const worker = new SWorker();

const runWorker = async () => {
    worker.postMessage('ping');
};
const resetMessage = async () => {
    worker.postMessage('clear');
};
const messageFromWorker = async ({
    data: { msg, mode: useMode },
}: {
    data: { msg?: string; mode?: string };
}) => {
    pong.value = msg;
    mode.value = useMode;
};

onBeforeMount(() => {
    worker.addEventListener('message', messageFromWorker);
});
</script>
<template>
    <p class="sw-btns">
        <a-button @click="runWorker">Ping Web Worker</a-button>
        &#160;&#160;
        <a-button @click="resetMessage">Reset Message</a-button>
    </p>

    <p v-if="pong" class="sw-msg">
        Response from web worker:
        <span>
            Message: <strong class="font-bold">{{ pong }}</strong>
        </span>
        <br />
        <span>
            Using ENV mode: <strong class="font-bold">{{ mode }}</strong></span
        >
    </p>
</template>
<style lang="scss" scoped></style>
