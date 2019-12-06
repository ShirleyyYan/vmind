<template>
    <div class="container">
        <span class="logo" v-on:click="clickLogo">{{ title }} ▾</span>
        <span class="title">文件名</span>
    </div>
</template>

<script>
export default {
    name: 'EditorHeader',
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
.container {
    background: #393f4f;
    line-height: 5vh;
    color: white;
}
.logo {
    display: block;
    position: fixed;
    min-width: 5vh;
    height: 5vh;
    font-size: 2vh;
    padding: 0px 20px;
    background-color: #fc8383;
    cursor: pointer;
}
.title {
    position: relative;
    font-size: 3vh;
    text-transform: uppercase;
}
</style>