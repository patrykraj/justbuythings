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
    basketProducts: [],
    selectedProduct: null,
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
    sorting: null,
    failedToFetch: null,
    loading: false,
    confirmAction: false,
    authError: null,
    authLoading: false,
    userData: null,
    tokenId: null,
  },

  getters: {
    isAuthenticated: (state) =>
      state.tokenId && state.userData ? true : false,
  },

  actions,
  mutations,
});

export default store;
