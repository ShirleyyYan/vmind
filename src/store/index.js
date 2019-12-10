import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import FileInformation from './modules/FileInformation.js';
import NodeList from './modules/NodeList.js';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
      FileInformation,
      NodeList
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});