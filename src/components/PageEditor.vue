<template>
  <div class="container">
    <div class="container-header">
      <slot name="header"></slot>
    </div>
    <div class="container-nav">
      <slot name="nav"></slot>
    </div>
    <div class="container-main">
      <slot name="main"></slot>
    </div>
    <div class="container-tools">
      <slot name="tools"></slot>
    </div>
  </div>
</template>

<script>
import '../css/reset.css';
export default {
    name: 'PageEditor',
    data () {
        return { msg: 'Editor Page' }
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
</style>
