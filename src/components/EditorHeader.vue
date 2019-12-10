<template>
    <div class="container">
        <span class="logo" v-on:click="clickLogo">{{ title }} ▾</span>
        <base-text-edit
        class="title"
        v-bind:text="filename"
        v-on:base-text-update="setFileName"
        width="20"
        ></base-text-edit>
    </div>
</template>

<script>
import BaseTextEdit from './base/BaseTextEdit';
export default {
    name: 'EditorHeader',
    props: [
        "title"
    ],
    computed: {
        filename: function() {
            return this.$store.state.FileInformation.fileName;
        }
    },
    components: {
        BaseTextEdit
    },
    methods: {
        clickLogo: function () {
            this.$emit('show-sidebar');
        },

        setFileName: function(value) {
            this.$store.dispatch("FileInformation/updateFileName", value);
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