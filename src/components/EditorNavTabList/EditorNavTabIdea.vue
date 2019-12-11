<template>
    <div class="container-idea">
    <editor-nav-icon-group v-bind:domWidth="50">
        <base-icon-button class="icon-item" v-bind:size="30" title="Add Node"></base-icon-button>
        <base-icon-button class="icon-item" v-bind:size="30" title="Delete Node"></base-icon-button>
    </editor-nav-icon-group>
    <editor-nav-icon-group v-bind:domWidth="250">
        <base-icon-text
        title='Insert Lower Level'
        class="icon-text"
        v-on:btn-text-click="addChildNode"
        ></base-icon-text>
    </editor-nav-icon-group>
    <editor-nav-icon-group v-bind:domWidth="250">
        <base-icon-text
        title='弹窗'
        class="icon-text"
        v-on:btn-text-click="alertWindow('test')"
        ></base-icon-text>
        <base-icon-text
        title='弹窗'
        class="icon-text"
        v-on:btn-text-click="alertWindow('test-two')"
        ></base-icon-text>
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
    },
    methods: {
        addChildNode: function () {
            this.$store.dispatch('NodeList/addNodeToChildAction');
        },

        alertWindow: function (windowId) {
            this.$store.dispatch('StageState/alertWindowAction_Open', windowId);
        }
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
.icon-text {
    margin-top: 5px;
}

</style>