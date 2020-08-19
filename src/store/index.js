import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    visibleProducts: [],
    visibleProperties: {
      from: 0,
      to: 4,
    },
  },

  actions,
  mutations,
});

export default store;
