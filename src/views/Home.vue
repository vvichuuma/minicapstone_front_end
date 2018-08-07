
<template>
  <div class="home">
    <h1>{{ message }}</h1>
   
    <div v-for = "product in products">

      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
       <p>{{ product.description }}</p>
     <!--   <img v-bind:src= "product.List_of_Images.url" alt="">  -->
       <img v-bind:src="product.List_of_Images_url" alt="" width=200>
       <!-- <img v-for="product in products.List_of_images".v-bind:src="product"> -->

       <div>
        <a v-bind:href=" '/#/productshow/' + product.id ">More_info</a>
        </div>
     </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "List of products",
      products: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/products").then(response => {
      console.log(response);
      this.products = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
