<template>
  <div class="products-show">
     <div class="container">
     <h2>{{ product.name }}</h2>
     <p>{{ product.description }}</p>
     <p>{{ product.price }}</p>
      <a href="/#/"> Back to all Products></a>
  </div>
</div>
</template>

<script>

   var axios = require("axios");


   export default {
  data: function() {
    return {
      message: "List of products",
      product: {},
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/products/" + this.$route.params.id).then(response => {
      console.log(response);
      this.product = response.data;
    });
  },
  methods: {},
  computed: {}
};








</script>
