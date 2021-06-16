<template>
<div>
  <p>just some text : {{ title.toUpperCase() }}</p>

  <p>{{ HtmlText }}</p>

  <div v-html="HtmlText"></div>
  <p v-if="isActive"> Active</p>
  <p v-else> Inactive</p>
  <ul>
    <li v-for="(num,index) in arrData" v-bind:key="index"> {{num}} </li>
  </ul>

  <ul>
    <li v-for="(num,key) in objData" v-bind:key="key"> {{key}} => {{num}} </li>
  </ul>

  <input type="text" v-bind:value="title" /> 
  <br/>
  <button v-bind:disabled="mybindData.isDisable">click me</button>
  <br/>
  <button v-bind:[mybindData.item]="!mybindData.isDisable">click me</button>
</div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      title: "my title",
      HtmlText: "<h1>Trying to mimic P tag </h1>",
      isActive: false,
      arrData: [ 'one','two','three','four','five'],
      objData: {
        name: "subhadip",
        father:"asit",
        mother:"anima"
      },
      mybindData:{
        item: "disabled",
        isDisable: true
      }
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
