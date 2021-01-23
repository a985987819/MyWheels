<template>
    <div class="gulu-progress"
         :style="progressStyle"
    ></div>
    <div class="container"
         :style="progressStyle1"
    >
        <button>
        </button>
    </div>

</template>
<script lang="ts">
    import {ref, watchEffect, reactive} from 'vue';

    export default {
        props: {
            myvalue: {
                type: Number,
                default: 0
            }
        },
        setup(props) {
            let progressStyle = reactive({
                width: '200px',
            });
            let progressStyle1 = reactive({
                width: '200px',
            });
            watchEffect(
                () => {
                    progressStyle1.width = (props.myvalue * 3) + 'px';
                    progressStyle.width = (props.myvalue * 3) + 'px';
                }
            );
            return {progressStyle};
        },
    };
</script>
<style lang="scss">
    .gulu-progress {
        background: #0d92ff;
        border-radius: 2px;
        height: 4px;
        width: 100px;
        position: relative;
        margin-top: 5px;
    }

    .container {
        position: absolute;
        margin-top: -17px;

        > button {
            position: relative;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ffffff;
            border: 1px solid #0d92ff;
        }
    }


    .value {
        margin-bottom: 0;
        margin-top: -10px;
        margin-left: 110%;
        font-size: 16px;
        width: 20px;
        height: 20px;
        color: white;
        font-weight: bold;
    }
</style>