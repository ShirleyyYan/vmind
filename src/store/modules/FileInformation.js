const state = {
    fileName: 'File Name'
};

const getters = {
    getStateFileName: function (state) {
        return state.fileName;
    }
};

const actions = {
    updateFileName (context, newValue) {
        context.commit('setFileName', newValue);
    }
};

const mutations = {
    setFileName (state, newValue) {
        state.fileName = newValue;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};