<template>
    <div>
        <div class="TopnavAndBanner">
            <Topnav/>
            <div class="banner">
                <h1>0UI</h1>
                <h2>一个有点厉害的UI框架</h2>
                <p class="actions">
                    <a href="https://github.com">Github</a>
                    <router-link to="/Doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-ts"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-idea"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    $green: #29928d;
    $border-radius: 6px;
    $color: #00a5a0;
    .TopnavAndBanner {
        background: linear-gradient(135deg, rgba(227, 252, 250, 1) 0%, rgba(120, 227, 216, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }
    .features{
        margin: 64px auto;
        width: 400px;
        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
        >ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                width: 400px;
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
        }
    }

    .banner {
        color: $color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                color: white;
                display: inline-block;
                padding: 8px 24px;
                border-radius: $border-radius;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>
<script lang="ts">
    import Topnav from '../components/Topnav.vue';

    export default {
        components: {Topnav}
    };
</script>