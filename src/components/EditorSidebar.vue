<template>
    <div class="container" v-on:click="hideSideBar">
        <editor-sidebar-tab v-on:sidebar-hide="hideSideBar"></editor-sidebar-tab>
    </div>
</template>

<script>
import EditorSidebarTab from './EditorSidebarTab';
export default {
    name: 'editorsidebar',
    components: {
        EditorSidebarTab
    },
    methods: {
        hideSideBar: function() {
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