import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import FileInformation from './modules/FileInformation.js';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
      FileInformation
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});