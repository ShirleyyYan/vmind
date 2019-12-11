<template>
    <div v-show="isAlertingWindow" v-on:click.stop="clickBackground" class="container-cover">
    <component v-if="isAlertingWindow" v-bind:is="getCurrentWindowId"></component>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import BaseAlertWindow from './base/BaseAlertWindow';

import EditorAlertWindowTest from './EditorAlertWindow/EditorAlertWindowTest.vue';
import EditorAlertWindowTestTwo from './EditorAlertWindow/EditorAlertWindowTestTwo.vue';

export default {
    name: 'EditorCover',
    components: {
        EditorAlertWindowTest,
        EditorAlertWindowTestTwo
    },
    data: function () {
        return {
            isActive: true
        }
    },
    methods: {
        clickBackground: function() {
            this.$store.dispatch('StageState/alertWindowAction_Close');
        }
    },
    computed: {
        ...mapGetters({
            isAlertingWindow: 'StageState/getAlertingState',
            currentAlertingWindow: 'StageState/getCurrentAlertingWindow'
        }),
        getCurrentWindowId: function () {
            return 'editor-alert-window-' + this.currentAlertingWindow;
        }
    }
}
</script>

<style scoped>
.container-cover {
    position: fixed;
    display: block;
    width: 100vw;
    height: 100vh;
    top: 0;
    text-align: center;
    overflow: hidden;
    background: rgba(10, 10, 10, 0.5);
}
</style>