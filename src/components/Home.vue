<template>
    <div>
        <h1>Trade or View Your Portfolio</h1>
        <h6>Click on end Day to begin a new day (not implemented)</h6>
        <hr>
        <p>Your funds: {{ funds }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

