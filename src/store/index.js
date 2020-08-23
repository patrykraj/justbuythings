import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    filteredProducts: [],
    comparedProducts: [],
    visibleProperties: {
      from: 0,
      to: 4,
    },
    filterProperties: {
      name: "",
      brand: "",
      colors: [],
      price: {
        from: null,
        to: null,
      },
    },
    filterActive: false,
    selectedPage: 0,
    itemsPerPage: 4,
  },

  actions,
  mutations,
});

export default store;
