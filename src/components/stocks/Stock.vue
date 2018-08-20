<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                   <p>{{ stock.name }}</p> 
                    <small>(Price: {{ stock.price | toCurrency('USD') }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="quantity"
                        v-model="quantity"
                        :class="{danger:insufficientFunds}">
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success" 
                        @click="buyStock" :disabled="quantity < 1 || !Number.isInteger( parseFloat(quantity) ) || insufficientFunds">
                        Buy
                        </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data: function() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientFunds: function() {
            return (this.quantity * this.stock.price) > this.$store.getters.funds;
        }
    },
    methods: {
        buyStock: function(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: parseInt(this.quantity)
            };
            //console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>
