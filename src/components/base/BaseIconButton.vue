<template>
    <div
    type="button"
    v-bind:style="iconSize"
    v-bind:title="title"
    v-bind:alt="title"
    class="container-icon"
    ></div>
</template>

<script>
export default {
    name: 'BaseIconButton',
    props: {
        img: String,
        size: {
            type: Number,
            default: 40
        },
        onClick: String,
        isActive: Boolean,
        title: String
    },
    computed: {
        iconSize: function () {
            return {
                width: this.size + 'px',
                height: this.size + 'px'
            };
        }
    }
}
</script>

<style scoped>
.container-icon {
    background-color:lightblue;
    display: inline-block;
}
.container-icon:hover {
    background-color: blue;
}
</style>