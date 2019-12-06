<template>
    <div class="container">
        <span class="logo" v-on:click="clickLogo">{{ title }} ▾</span>
        <base-text-edit class="title" text="file name" width="20">文件名</base-text-edit>
    </div>
</template>

<script>
import BaseTextEdit from './base/BaseTextEdit';
export default {
    name: 'EditorHeader',
    props: [
        "title"
    ],
    components: {
        BaseTextEdit
    },
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
}
</style>