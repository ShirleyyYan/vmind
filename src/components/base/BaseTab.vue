<template>
    <div class="tab-group">
        <slot name="tab-title"></slot>
        <slot name="tab-content"></slot>
    </div>
</template>

<script>
export default {
    name: 'baseTab',
    prop: {
    }
}
</script>

<style scoped>

</style>