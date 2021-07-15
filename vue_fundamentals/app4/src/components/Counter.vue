<template>
    <div>        
        <h1>counter : {{vux_count}}</h1>
        <button @click="deduct_to_count(1)"> Substract</button>
        <input class="my_input" type="text" v-model="my_num" />
        <button @click="add_to_Count(1)"> Add</button>
    </div>
</template>

<script>

import {mapState , mapMutations} from 'vuex'
export default {
    name: 'Counter',
    data() {
        return{            
            my_num:1
        }       
    },
    computed : {
        ...mapState(["vux_count"])
    },
    methods: {
        ...mapMutations(["add_to_Count","deduct_to_count"])
    }
}
</script>

<style scoped>
    .my_input{
        margin:10px;
    }
</style>