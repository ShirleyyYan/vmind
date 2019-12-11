<template>
    <base-alert-window windowId="test" title="测试弹窗">
    <input type="text">
    </base-alert-window>
</template>

<script>
import BaseAlertWindow from '../base/BaseAlertWindow.vue';
export default {
    name: 'EditorAlertWindowTest',
    components: {
        BaseAlertWindow
    }
}
</script>

<style scoped>

</style>