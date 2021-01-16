<template>
    <div>Dialog示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x"
            :CloseOnClickOverlay="false"
            :ok="fn1"
            :cancel="fn2">
        <template v-slot:title>
            <strong>
                警告
            </strong>
        </template>
        <template v-slot:content>
            <div>你因为吃饭过多</div>
            <div>被怀疑刷单</div>
        </template>
    </Dialog>
</template>
<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import {ref} from 'vue';

    export default {
        components: {Button, Dialog},
        setup() {
            const x = ref(false);
            const toggle = () => {
                x.value = !x.value;
            };
            const fn1 = () => {

            };
            const fn2 = () => {

            };
            return {
                x, toggle, fn1, fn2
            };
        }
    };
</script>