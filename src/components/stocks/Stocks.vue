<template>
    <div>
        <app-stock v-for='stock in stocks' :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue';
export default {
    data: function() {
        return {
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
            ]
        }
    },
    components: {
        'app-stock':Stock
    }
}
</script>

