<template>
    <div ref="container-stage" class="container"></div>
</template>

<script>
import XmindStage from '../libs/stage/index.js';
export default {
    name: 'EditorMain',
    mounted: function () {
        let stage = XmindStage.CreateStage({parentDom:this.$refs['container-stage']} );
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>