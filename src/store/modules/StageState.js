const state = {
    zoom: 1,
    selectedNodes: [],
    isAlerting: false,
    currentAlertingWindow: null
};

const getters = {
    getAlertingState() {
        return state.isAlerting;
    },
    getCurrentAlertingWindow() {
        return state.currentAlertingWindow;
    }
};

const actions = {
    alertWindowAction_Open (context, windowId) {
        context.commit('alertWindowMutation_Open', windowId);
    },

    alertWindowAction_Close (context) {
        context.commit('alertWindowMutation_Close');
    } 
};

const mutations = {
    alertWindowMutation_Open (state, windowId) {
        state.isAlerting = true;
        state.currentAlertingWindow = windowId;
    },
    alertWindowMutation_Close (state) {
        state.isAlerting = false;
        state.currentAlertingWindow = null;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};