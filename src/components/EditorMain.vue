<template>
    <div ref="container-stage" class="container">
        stage
    </div>
</template>

<script>
export default {
    name: 'EditorMain',
    mounted: function () {
        console.log(PIXI);
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>