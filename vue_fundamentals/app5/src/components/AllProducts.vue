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
    methods: {
        ...mapActions({
            getAllProducts: "products/getAllProducts"
        })
    },
    mounted() {
        this.getAllProducts();
    },
    
}

</script>

<style>

</style>