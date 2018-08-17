const state = {
    funds: 10000,
    stocks: []
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find( elem => elem.id == stock.id );
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) { return state.funds }
};

const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}){
        const record = state.stocks.find( (elem) => { return( elem.id==stockId ) } );
        if(record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, stockPrice, stockQuantity}) {
        const record = state.stocks.find( (elem) => { return( elem.id==stockId ) } );
        if(record.quantity > stockQuantity) {
            record.quantity -= stockQuantity;
        } else {
            const index = state.stocks.indexOf(record);
            state.stocks.splice( index, 1 );
        }
        state.funds += (stockPrice * stockQuantity);
    }
};

const actions = {
    sellStock(context, order) {
        context.commit('SELL_STOCK', order);
    }
};

export default {
    state, getters, mutations, actions
}