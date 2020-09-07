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
      to: 8,
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
    itemsPerPage: 8,
    sorting: null,
    failedToFetch: null,
    loading: false,
    confirmAction: false,
    loadingAction: false,
    errorAction: null,
    successAction: null,
    cancelId: null,
    authError: null,
    authLoading: false,
    userData: null,
    tokenId: null,
  },

  getters: {
    isAuthenticated: (state) => (state.tokenId ? true : false),
  },

  actions,
  mutations,
});

export default store;
