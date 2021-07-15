<template>
  <div>
    my random no : {{myRandom}}<br>

    full name : {{fullname}} <br>
    <form @submit.prevent="formSubmit">
        first name : <input type="text" v-model="first_name" /><br>
        last name : <input type="text" v-model="last_name" /><br>

        full name : <input type="text" v-model="fullname" /><br>
        (firstname and last will not change , if we change full name )<br>
        (because get , set , is not defined for this computed property)<br><br>

        full name: getter/setter : <input type="text" v-model="fullname_get_set" /><br>
         (firstname and last will  change , if we change full name: getter/setter )<br>
        (because get , set , is  defined for this computed property)<br><br>
        
        <input type="submit" value="submit" />
    </form>
    <br/>
    name : <input type="text" ref="my_name_ref" /><br>
    (we will make this input active by Ref)<br>
  </div>
</template>

<script>
export default {
  name: 'App',
  data : () =>{
    return {
      first_name:"",
      last_name:"",
    }
  },
  computed: {
    myRandom : function(){
      return Math.random()
    },
    fullname : function(){ 
      return this.first_name+" "+this.last_name
    },
    fullname_get_set :{
      get : function(){
        return this.first_name+" "+this.last_name
      },
      set: function(val) {
        const names_arry = val.split(" ")
        this.first_name = names_arry[0]
        this.last_name = names_arry[1]
      }
    }

  },
  methods: {
    formSubmit : function(){
      alert("submited ful name : "+this.fullname)
      this.name =""
    }

  },
  mounted: function(){
    this.$refs.my_name_ref.focus()
  }
}
</script>


