<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                   <p>{{ stock.name }}</p> 
                    <small>(Price: {{ stock.price | toCurrency('USD') }} | Quantity: {{ stock.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="quantity"
                        v-model="quantity"
                        :class="{danger:insufficientQuantity}">
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-info" 
                        @click="sellStock" 
                        :disabled="quantity < 1 || !Number.isInteger( parseFloat(quantity) ) || insufficientQuantity">Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() { return this.quantity > this.stock.quantity; }
    },
    methods: {
        ...mapActions({
            sellOrder: 'sellStock'
        }),
        sellStock: function(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: this.quantity
            };

            // invoke the 'sellStock' action on portfolio.js, mapped to 'sellOrder' via mapActions above
            this.sellOrder(order);

            // could also just dispatch the action directly on the store
            //this.$store.dispatch('sellStock', order);

            this.quantity=0;
        }
    }
}
</script>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>
