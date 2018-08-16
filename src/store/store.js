import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
        portfolio: [
            { 
                stockid: 3,
                quantity: 5
            },
            { 
                stockid: 1,
                quantity: 10
            }
        ],
        funds: 10000
    },
    getters: {

    },
    mutations: {
        buyStock(state, payload) {

        }
    },
    actions: {
        buyStock(context, payload) {

        }
    }
})