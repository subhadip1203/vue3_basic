<template>
  <p>just some text : {{ title.toUpperCase() }}</p>
  {{HtmlText}}
  <div v-html="HtmlText"></div>
  <p v-if="isActive"> Active</p>
  <p v-else> Inactive</p>

</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      title: "some random text",
      HtmlText: "<h1>Trying to mimic P tag </h1>",
      isActive: false,
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
