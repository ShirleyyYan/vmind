<template>
    <div class="container" v-on:click.stop>
        <div class="container-left">
            <div class="container-back" v-on:click="clickBackIcon">
                <div class="back-icon">➔</div>
            </div>
            <ul class="container-tabs-title">
            <li
            v-for="tab in tabs"
            v-bind:key="tab.name"
            v-on:click="tabListUpdate(tab.name)"
            v-bind:class="['sidebar-tab-item', {'sidebar-tab-item-active': currentTab === tab.name}]"
            >{{tab.title}}</li>
            </ul>
        </div><div class="container-right">
            <keep-alive>
                <component
                    v-bind:is="currentTabComponent"
                    class="container-right"
                ></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import EditorSidebarTabNew from './EditorSidebarTabList/EditorSidebarTabNew.vue';
import EditorSidebarTabOpen from './EditorSidebarTabList/EditorSidebarTabOpen.vue';
export default {
    name: 'EditorSidebarTab',
    data: function() {
        return {
            currentTab: 'new',
            tabs: [{
                name: 'new',
                title: '新建'
            },{
                name: 'open',
                title: '打开'
            }]
        };
    },
    computed: {
        currentTabComponent: function () {
            return `editor-sidebar-tab-${this.currentTab}`;
        }
    },
    components: {
        EditorSidebarTabNew,
        EditorSidebarTabOpen
    },
    methods: {
        clickBackIcon: function () {
            this.$emit('sidebar-hide');
        },

        tabListUpdate: function (str) {
            this.currentTab = str
        }
    }
}
</script>

<style scoped>
.container {
    width: 500px;
    height: 100vh;
    background-color: white;
    border: #fc8383 1px solid; 
    text-align: left;
}
.container-left {
    display: inline-block;
    width: 150px;
    height: 100%;
    background-color: #fc8383;
    color: white;
    vertical-align: top;
}
.container-back {
    text-align: center;
    margin-top: 4vh;
    padding: 1vh 0 1vh 4vh;
}
.container-back:hover {
    background: linear-gradient(to right,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
}
.back-icon {
    width: 4vh;
    height: 4vh;
    border: 2px white solid;
    border-radius: 4vh;
    line-height: 4vh;
    font-size: 3vh;
    transform: rotateY(180deg);
}
.container-tabs-title {
    margin-top: 4vh;
    font: 2vh white;
    line-height: 5vh;
}
.sidebar-tab-item {
    padding-left: 4vh;
}
.sidebar-tab-item:hover {
    background-color: #fb6a6a;
}
.sidebar-tab-item-active, .sidebar-tab-item-active:hover {
    background-color: #fdb4b4;
}
.container-right {
    display: inline-block;
    height: 100%;
    width: 350px;
    vertical-align: top;
    overflow: hidden;
}
</style>