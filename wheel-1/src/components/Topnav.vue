<template>
    <div class="topnav">
        <img class="logo" src="../assets/egg.png"/>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
            <img class="toggleAside" @click="toggleaside()" src="../assets/list.png">
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue';

    export default {
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible');
            const toggleaside = () => {
                asideVisible.value = !asideVisible.value;
            };
            return {toggleaside};
        },
    };

</script>

<style lang="scss" scoped>

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .topnav {
        display: flex;
        padding: 16px;
        position: relative;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        align-items: center;

        > .logo {
            height: 30px;
            max-width: 6em;
            margin-right: auto;
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }

        > .toggleAside {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            display: none;
        }

        @media (max-width: 500px) {
            > .menu {
                display: none;
            }
            > .logo {
                margin: 0 auto;
            }
            > .toggleAside {
                display: inline-block;
            }
        }
    }


</style>