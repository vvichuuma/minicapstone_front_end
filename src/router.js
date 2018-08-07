import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Productsnew from "./views/Productsnew.vue";
import ProductsShow from "./views/ProductsShow.vue"
import Shoppingcart from "./views/Shoppingcart.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/newProducts",
      name: "new_Products",
      component: Productsnew
    },

    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/shoppingcart",
      name: "shopping_cart_index",
      component: Shoppingcart
    },
    {
      path: "/productshow/:id",
      name: "product_show",
      component: ProductsShow
    },


    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
