import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import store from "./store";

import App from "./App.vue";
import ShopPage from "./pages/ShopPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import BasketPage from "./pages/BasketPage.vue";
import AuthenticatePage from "./pages/AuthenticatePage.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/product/:id",
      name: "product",
      component: ProductPage,
      props: true,
    },
    { path: "/", name: "home", component: ShopPage },
    { path: "/basket", name: "basket", component: BasketPage },
    { path: "/auth", name: "auth", component: AuthenticatePage },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  render: (h) => h(App),
}).$mount("#app");
