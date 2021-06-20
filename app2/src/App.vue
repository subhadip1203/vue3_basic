<template>
  <div>
    <form @submit.prevent="formSubmit">
        <input type="text" v-model="name" />
        <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data : () =>{
    return {
      name:"",
    }
  },
  methods: {
    formSubmit : function(){
      alert("submited : "+this.name)
      this.name =""
    },

  }
}
</script>


