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
import NotFound from "./pages/NotFound.vue";

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
    { path: "/logout", name: "logout" },
    { path: "/404", component: NotFound },
    { path: "*", redirect: "/404" },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "auth" && store.getters.isAuthenticated)
    next({ name: "home" });
  else if (to.name === "my account" && !store.getters.isAuthenticated)
    next({ name: "home" });
  else if (to.name === "logout" && store.getters.isAuthenticated) {
    store.dispatch("logout");
    next({ name: "home" });
  } else if (to.name === "logout" && !store.getters.isAuthenticated)
    next({ name: "home" });
  else if (!to.matched.length) next("/404");
  else next();
});

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    this.$store.commit("initialiseStore");
    this.$store.dispatch("tryAutoLogin");
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
