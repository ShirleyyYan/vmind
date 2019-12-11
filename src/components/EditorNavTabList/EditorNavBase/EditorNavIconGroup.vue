<template>
    <div class="container-icon-group" v-bind:style="{width:domWidth + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'EditorNavIconGroup',
    props: {
        domWidth: {
            type: Number,
            default: 300
        }
    }
}
</script>

<style scoped>
.container-icon-group {
    display: inline-block;
    padding: 10px;
    margin: 2vh 0;
    height: 10vh;
    vertical-align: middle;
    border-right: 1px dashed #E0E0E0;
}
</style>