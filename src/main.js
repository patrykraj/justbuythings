import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import store from "./store";

import App from "./App.vue";
import ShopPage from "./pages/ShopPage.vue";
import ProductPage from "./pages/ProductPage.vue";
import BasketPage from "./pages/BasketPage.vue";
import AuthenticatePage from "./pages/AuthenticatePage.vue";
import AccountPage from "./pages/AccountPage.vue";

Vue.use(Vuex);
Vue.use(VueRouter);

export const router = new VueRouter({
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
    { path: "/account", name: "my account", component: AccountPage },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "auth" && store.getters.isAuthenticated)
    next({ name: "home" });
  else if (!to.matched.length) next("/notFound");
  else next();
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
