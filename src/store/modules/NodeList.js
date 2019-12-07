import xmindStage from '../../libs/stage/index.js';

const state = {
    nodeList: []
};

const getters = {
    getCurrentNode () {
        return xmindStage.GetSelectedNode();
    }
};

const actions = {
    addNodeToChildAction (context) {
        context.commit('addNodeToChildMutation');
    }
};

const mutations = {
    addNodeToChildMutation (state) {
        xmindStage.AddChildNode();
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};