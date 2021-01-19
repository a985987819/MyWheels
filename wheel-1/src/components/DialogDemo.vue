<template>
    <div>Dialog示例
    </div>
    <h1>示例1</h1>
    <Button @click="toggle">召唤Dialog</Button>
    <Dialog v-model:visible="visible"
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
    <h1>示例2</h1>
    <Button @click="showDialog">显示dialog</Button>
</template>
<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import {openDialog} from '../lib/openDialog';
    import {ref} from 'vue';

    export default {
        components: {Button, Dialog},
        setup() {
            const visible = ref(false);
            const toggle = () => {
                visible.value = !visible.value;
            };
            const fn1 = () => {

            };
            const fn2 = () => {

            };

            const showDialog = () => {
                openDialog({
                    title: '警告',
                    content: '不能再吃了',
                    ok() {
                        console.log('ok');
                    },
                    cancel() {
                        console.log('cancel');
                    },
                });
            };
            return {
                visible, toggle, fn1, fn2, showDialog,
            };
        }
    };
</script>