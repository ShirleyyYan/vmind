<template>
    <div class="container">
        <editor-nav-tab></editor-nav-tab>
    </div>
</template>

<script>
import EditorNavTab from './EditorNavTab.vue';
export default {
    name: 'EditorNav',
    components: {
        EditorNavTab
    }
}
</script>

<style scoped>
.container {
    border-bottom: 1px solid #dbdbdb
}
</style>