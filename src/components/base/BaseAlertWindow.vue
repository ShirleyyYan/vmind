<template>
    <div class="container-alert-window"
    v-bind:style="getMarginTop"
    v-on:click.stop>
        <div class="window-title">{{title}}</div>
        <div class="window-body">
            <slot></slot>
        </div>
        <div class="window-close"></div>
    </div>
</template>

<script>
export default {
    name: "BaseAlertWindow",
    props: {
        height: {
            type: Number,
            default: 30
        },
        title: {
            type: String,
            default: 'Alert Window'
        }
    },
    data: function () {
        return {
            isActive: true
        }
    },
    computed: {
        getMarginTop: function () {
            console.log('--->height', this.height);
            return {
                marginTop: (50 - this.height / 2) + 'vh'
            };
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.container-alert-window {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 60vw;
    min-height: 30vh;
    background-color: #FAFAFA;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.window-title {
    height: 56px;
    line-height: 56px;
    font-size: 26px;
    text-align: left;
    padding-left: 30px;
    border-bottom: 1px solid rgb(187, 187, 187);
}
.window-body {
    font-size: 20px;
    padding: 30px;
}
.window-body input {
    font-size: 18px;
    border-radius: 4px;
}
</style>