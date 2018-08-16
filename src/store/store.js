import Vue from 'vue';
import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
        stocks: [
            {
                id: 1,
                name: 'BMW',
                price : 40
            },
            {
                id: 2,
                name: 'Google',
                price : 95
            },
            {
                id: 3,
                name: 'Harley-Davidson',
                price : 35
            },
            {
                id: 1,
                name: 'Acme',
                price : 12
            }
        ],
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