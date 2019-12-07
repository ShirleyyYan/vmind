const state = {
    zoom: 1,
    selectedNodes: []
};

const getters = {

};

const actions = {
    updateFileName (context, newValue) {
        context.commit('setFileName', newValue);
    }
};

const mutations = {
    setFileName (state, newValue) {
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};