<template>
  <div class="home">   
    <AllProducts msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AllProducts from "@/components/AllProducts.vue";

export default {
  name: "Home",
  components: {
    AllProducts,
  },
};
</script>
