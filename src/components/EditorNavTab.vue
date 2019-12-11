<template>
    <div class="container-nav-tab">
    <ul class="nav-tab-list">
        <li
            v-for="tab in tabs"
            v-bind:key="tab.name"
            v-on:click="tabListUpdate(tab.name)"
            v-bind:class="['nav-tab-list-item', { 'nav-tab-list-item-active': currentTab === tab.name }]"
        >{{tab.title}}</li>
    </ul>
    <keep-alive>
        <component
            v-bind:is="currentTabComponent"
            class="nav-tab-content"
        ></component>
    </keep-alive>
    </div>
</template>

<script>
import EditorNavTabAppearance from './EditorNavTabList/EditorNavTabAppearance.vue';
import EditorNavTabIdea from './EditorNavTabList/EditorNavTabIdea.vue';
import EditorNavTabView from './EditorNavTabList/EditorNavTabView.vue';
export default {
    name: 'EditorNavTab',
    data: function () {
        return {
            currentTab: 'idea',
            tabs: [{
                name: 'idea',
                title: '思路'
            }, {
                name:'appearance',
                title: '外观'
            }, {
                name: 'view',
                title: '视图'
            }]
        };
    },
    components: {
        EditorNavTabAppearance,
        EditorNavTabIdea,
        EditorNavTabView
    },
    computed: {
        currentTabComponent: function () {
            return `editor-nav-tab-${this.currentTab}`;
        }
    },
    methods: {
        tabListUpdate: function (str) {
            this.currentTab = str
        }
    }
}
</script>

<style scoped>
.container-nav-tab {
    display: block;
}

.nav-tab-list {
    background-color: #e1e1e1;
    text-align: left;
}

.nav-tab-list-item {
    display: inline-block;
    padding: 0px 20px;
    font-size: 14px;
    line-height:4vh;
    color: #337ab7;
    cursor: default;
}

.nav-tab-list-item:hover {
    color: #245581;
}

.nav-tab-list-item-active {
    background-color: white;
    color: black;
    border-radius: 5px 5px 0 0;
}

.nav-tab-list-item-active:hover {
    color: black;
}

.nav-tab-content {
    height: 16vh;
    width: 300vw;
    background-color: white;
    text-align: left;
}
</style>