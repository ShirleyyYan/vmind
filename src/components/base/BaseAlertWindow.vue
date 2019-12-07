<template>
    <div v-show="isActive" v-on:click.stop="clickBackground" class="container-alert-window">
        
    </div>
</template>

<script>
export default {
    name: "BaseAlertWindow",
    data: function () {
        return {
            isActive: true
        }
    },
    methods: {
        clickBackground: function() {
            this.isActive = false;
        }
    }
}
</script>

<style scoped>
.container-alert-window {
    position: fixed;
    display: block;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 10, 10, 0.5);
}
</style>