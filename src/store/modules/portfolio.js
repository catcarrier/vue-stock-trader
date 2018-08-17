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
    'BUY_STOCK' (state, {stockId, stockQuantity, stockPrice}){

        //console.log(stockId, stockQuantity, stockPrice);

        const record = state.stocks.find( (elem) => { return( elem.id==stockId ) } );
        if(record) {
            //console.log("quantity before", record.quantity, "adding", stockQuantity )
            record.quantity += stockQuantity;
            //console.log("new quantity", record.quantity);
        } else {
            const newStock = {
                id: stockId,
                quantity: stockQuantity
            };
            //console.log(newStock);
            state.stocks.push(newStock);
        }
        state.funds -= stockPrice * stockQuantity;
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