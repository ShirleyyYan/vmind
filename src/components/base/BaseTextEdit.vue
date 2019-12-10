<template>
    <span class="container">
        <span class="text-pri" v-if="!isEditing" v-on:click="isEditing=true">{{currentText}}</span>
        <span v-else><input ref="editor" type="text" v-model="currentText" v-on:keyup.enter.prevent.stop="stopEdit()" v-on:blur="stopEdit()" autofocus=true></span>
    </span>
</template>

<script>
export default {
    name: 'BaseTextEdit',
    props: {
        text: String
    },
    data: function() {
        return {
            currentText: this.text,
            isEditing: false
        };
    },
    methods: {
        stopEdit: function () {
            this.isEditing = false;
            this.$emit('base-text-update', this.currentText);
        }
    },
    watch: {
        isEditing: function(newState, oldState) {
            if (newState && !oldState) {
                this.$nextTick(() => {
                    this.$refs.editor.focus();
                });
                
            }
        }
    }
}
</script>

<style scoped>
.text-pri {
    cursor: text;
}
input {
    color: inherit;
    font: inherit;
    line-height: inherit;
    background: inherit;
    border: none;
    outline: none;
    text-align: inherit;
    background-color: rgba(255, 255, 255, 0.1);
}
</style>