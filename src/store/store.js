import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: actions,
    modules: { stocks, portfolio }
})