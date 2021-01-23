<template>
    <div class="gulu-slider"
         @mousemove="buttonmove"
         @mousedown="mousedown"
         @mouseup="mouseup"
    >
        <div class="gulu-orbit">
            <Progress
                    v-model:myvalue="myvalue"
            ></Progress>
            <div class="value">
                {{myvalue}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {ref} from 'vue';
    import Progress from './Progress.vue';

    export default {
        components: {Progress},
        setup() {
            const myvalue = ref(0);
            let dragging = false;

            function buttonmove($event: MouseEvent) {
                const getMyvalue = () => {
                    let num = ($event.clientX - 170) / 3;
                    if (num >= 100) {
                        num = 100;
                    }
                    myvalue.value = parseInt(num.toString());
                };
                const btnLeft = () => {
                    btn[0].style.left = myvalue.value*3 + 'px';
                };
                let btn = document.documentElement.getElementsByTagName('button');
                btn[0].style.left;
                if (dragging) {
                    if ($event.clientX <= 170) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else if ($event.clientX >= 472) {
                        dragging = false;
                        btn[0].style.left = myvalue.value*3-10 + 'px';
                        getMyvalue();
                    } else if ($event.clientY >= 147) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else if ($event.clientX <= 118) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else {
                        getMyvalue();
                        btnLeft();
                    }
                }
            }


            const mousedown = ($event) => {
                dragging = true;
                let btn = document.documentElement.getElementsByTagName('button');
                btn[0].style.left = $event.clientX - 2 + 'px';
                const getMyvalue = () => {
                    let num = ($event.clientX - 170) / 3;
                    if (num >= 100) {
                        num = 100;
                    }
                    myvalue.value = parseInt(num.toString());
                };
                const btnLeft = () => {
                    btn[0].style.left = myvalue.value*3 + 'px';
                };

                if (dragging) {
                    if ($event.clientX <= 170) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else if ($event.clientX >= 472) {
                        btn[0].style.left = myvalue.value*3-10 + 'px';
                        getMyvalue();
                    } else if ($event.clientY >= 147) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else if ($event.clientX <= 118) {
                        dragging = false;
                        getMyvalue();
                        btnLeft();
                    } else {
                        getMyvalue();
                        btnLeft();
                    }
                }
            };
            const mouseup = () => {
                dragging = false;
            };
            return {mousedown, mouseup, buttonmove, myvalue};
        }
    };
</script>

<style lang="scss">
    .gulu-slider {
        padding-top: 12px;
        //border: 1px solid red;
        height: 30px;
        position: absolute;
        .gulu-orbit {
            width: 300px;
            height: 4px;
            /*background: #0d92ff;*/
            background: #e2e2e2;
            border-radius: 4px;
            > .progress {
                width: 100px;
                height: 100%;
                background: #0d92ff;
                border-radius: 4px;
            }
        }

        &:hover {
            button {
                width: 16px;
                height: 16px;
                margin-top: -11px;
                margin-left: -2px;
                background: #ffffff;
                border: 2px solid #0d92ff;
                animation: all 250ms;
            }
            .value{
                color: #454545;
                user-select: none;
            }
        }
    }


</style>