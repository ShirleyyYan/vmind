<template>
  <div class="container">

    <div class="container-header">
      <editor-header
      v-bind:title="AppConfig.appTitle"
      v-on:show-sidebar="toggleSidebar(true)"
      name="header"
      ></editor-header>
    </div>

    <div class="container-nav">
      <editor-nav></editor-nav>
    </div>

    <div class="container-main">
      <div name="main"></div>
    </div>

    <div class="container-tools">
      <div name="tools"></div>
    </div>

    <editor-sidebar
    v-on:sidebar-hide="toggleSidebar(false)"
    v-show="isSidebarShow"
    class="container-sidemenu"
    ></editor-sidebar>
  </div>
</template>

<script>
import '../css/reset.css';
import AppConfig from '../assets/config.json';

import EditorHeader from './EditorHeader.vue';
import EditorSidebar from './EditorSidebar.vue';
import EditorNav from './EditorNav.vue';

export default {
    name: 'PageEditor',
    components: {
        EditorHeader,
        EditorSidebar,
        EditorNav
    },
    data () {
        return {
            msg: 'Editor Page' ,
            isSidebarShow: false,
            AppConfig
            }
    },
    methods: {
        toggleSidebar: function (value) {
            this.isSidebarShow = value;
        }
    }
}
</script>

<style scoped>
.container-header {
    height: 5vh;
    background-color: aqua;
}
.container-nav {
    height: 20vh;
    background-color: burlywood;
}
.container-main {
    height: 75vh;
    background-color: darkolivegreen;
}
.container-tools {
    position: fixed;
    width: 5vw;
    height: 50vh;
    bottom: 0px;
    background-color: turquoise;
}
.container-sidemenu {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    background-color: bisque;
}
</style>
