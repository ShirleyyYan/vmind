<template>
    <div>
        <span class="logo" v-on:click="clickLogo"></span>
        <span class="title">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'editorheader',
    props: [
        "title"
    ],
    methods: {
        clickLogo: function () {
            this.$emit('show-sidebar');
        }
    }
}
</script>

<style scoped>
.logo {
    display: block;
    position: fixed;
    width: 5vh;
    height: 5vh;
    background-color: brown;
}
.title {
    position: relative;
    line-height: 5vh;
    font-size: 4vh;
    text-transform: uppercase;
}
</style>