<template>
    <div>
        Tabs示例
    </div>
    <h1>示例1</h1>
    <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2">内容2</Tab>
        <Tab title="短">内容3</Tab>
        <Tab title="这是一个非常非常长的导航">这是一个非常非常长的导航里面的内容</Tab>
    </Tabs>
</template>
<script lang="ts">
    import Tabs from '../lib/Tabs.vue';
    import Tab from '../lib/Tab.vue';
    import {ref} from 'vue';

    export default {
        components: {Tabs, Tab},
        setup() {
            const x = ref('导航1');
            return {x};
        },
    };
</script>