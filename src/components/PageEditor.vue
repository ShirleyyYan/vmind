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
      <editor-main></editor-main>
    </div>
    <div class="container-tools">
      <div name="tools"></div>
    </div>
    <editor-sidebar
    v-on:sidebar-hide="toggleSidebar(false)"
    v-show="isSidebarShow"
    class="container-sidemenu"
    ></editor-sidebar>
    <editor-cover></editor-cover>
  </div>
</template>

<script>
import AppConfig from '../assets/config.json';

import EditorCover from './EditorCover';

import EditorHeader from './EditorHeader.vue';
import EditorSidebar from './EditorSidebar.vue';
import EditorNav from './EditorNav.vue';
import EditorMain from './EditorMain.vue';


export default {
    name: 'PageEditor',
    components: {
        EditorHeader,
        EditorSidebar,
        EditorNav,
        EditorMain,
        EditorCover
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
    height: calc(74vh - 1px);
    margin-top:1px;
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
