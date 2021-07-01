<template>
    <div>
        <h1>counter : {{$store.state.count}}</h1>
        <button> Substract</button>
        <input class="my_input" type="text" v-model="my_num" />
        <button> Add</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data: function() {
        return{            
            my_num:1
        }
       
    }
}
</script>

<style scoped>
    .my_input{
        margin:10px;
    }
</style>