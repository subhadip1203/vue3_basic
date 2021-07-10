<template>
    <div>  
        <p  v-for="product in products" :key="product.id" > {{product.name}} </p>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "AllProducts",
    props: {
        msg: String,
    },
    computed : {
        ...mapState("products", ["products"])
    },
    mounted() {
        this.getAllProducts();
    },   
    methods: {
        ...mapActions("products", ["getAllProducts"])
    },
    
}
</script>

<style>

</style>