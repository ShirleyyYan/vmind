<template>
    <div class="container-idea">
    <editor-nav-icon-group>
        <base-icon-button class="icon-item" v-bind:size="30" title="Add Node"></base-icon-button>
        <base-icon-button class="icon-item" v-bind:size="30" title="Delete Node"></base-icon-button>
    </editor-nav-icon-group>
    <editor-nav-icon-group>
        <base-icon-text title='Insert Lower Level'></base-icon-text>
    </editor-nav-icon-group>
    </div>
</template>

<script>
import EditorNavIconGroup from './EditorNavBase/EditorNavIconGroup.vue';
import BaseIconButton from '../base/BaseIconButton.vue';
import BaseIconText from '../base/BaseIconButtonText.vue';
export default {
    name: 'EditorNavTapIdea',
    components: {
        BaseIconButton,
        EditorNavIconGroup,
        BaseIconText
    }
}
</script>

<style scoped>
.container-idea {
    overflow: hidden;
}
.icon-item {
    margin: 5px;
}

</style>