<template>
    <div class="container-icon-text"
    v-bind:style="btnStyle"
    >
    {{title}}
    </div>
</template>

<script>
export default {
    name: 'BaseButtonText',
    props: {
        img: String,
        imgSize: {
            type: Number,
            default: 40
        },
        height: {
            type: Number,
            default: 40
        },
        width: {
            type: Number,
            default: 200
        },
        onClick: String,
        isActive: {
            type: Boolean,
            default: true
        },
        title: String
    },
    computed: {
        btnStyle: function () {
            return {
                'min-width': `${this.width}px`,
                height: `%{this.height}px`
            };
        }
    }

}
</script>

<style scoped>
.container-icon-text {
    display: inline-block;
    font-size: 1.8vh;
    border: 1px #EEEEEE solid;
    border-radius: 5px;
    line-height: 2.5vh;
    padding-left: 4vh;
}
.container-icon-text:hover {
    border-color: #CCCCCC;
}
</style>