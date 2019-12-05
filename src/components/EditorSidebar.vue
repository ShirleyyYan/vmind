<template>
    <div v-on:click="clickCover">
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

</style>