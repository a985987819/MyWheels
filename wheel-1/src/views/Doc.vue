<template>
    <div class="layout">
        <Topnav class="nav" :toggle-menu-button-visible="true"/>
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/slider">Slider组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue';
    import {inject, Ref} from 'vue';

    export default {
        components: {Topnav},
        setup() {
            const asideVisible = inject<Ref<boolean>>('asideVisible');
            return {asideVisible};
        }
    };
</script>
<style lang="scss" scoped>

    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .nav {
            flex-shrink: 0;
        }

        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }

    .content {
        display: flex;

        > aside {
            flex-shrink: 0;
        }

        > main {
            flex-grow: 1;
            padding: 16px;
            background: white;
        }
    }

    aside {
        background: #81dcd3;
        width: 150px;
        padding: 16px 0;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        padding-top: 70px;

        > h2 {
            margin-bottom: 4px;
            padding: 0 16px;
        }

        > ol {
            > li {

                > a {
                    display: block;
                    padding: 4px 16px;
                    text-decoration: none;

                }

                .router-link-active {
                    background: white;
                }
            }
        }

        @media (max-width: 500px) {
            position: fixed;
            top: 0;
            left: 0;
            padding-top: 70px;
        }
    }

    main {
        overflow: auto;
    }
</style>