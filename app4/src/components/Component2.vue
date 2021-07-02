<template>
    <p>direct counter from vuex in Component2 : {{$store.state.vuex_otherdata}}</p>
    <Counter />
</template>

<script>

import Counter from './Counter.vue'
export default {
    name: 'App',  
    components:{
        Counter
    }  
}
</script>

<style scoped>

</style>
