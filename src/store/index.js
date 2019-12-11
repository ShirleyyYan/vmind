import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import FileInformation from './modules/FileInformation.js';
import NodeList from './modules/NodeList.js';
import StageState from './modules/StageState';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
      StageState,
      FileInformation,
      NodeList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});