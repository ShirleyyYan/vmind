<template>
    <div class="container" v-on:click="clickCover">
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'editorsidebar',
    methods: {
        clickCover: function() {
            this.$emit('sidebar-hide');
        }
    }
}
</script>

<style scoped>
.container {
    background: rgba(10, 10, 10, 0.5);
}
</style>