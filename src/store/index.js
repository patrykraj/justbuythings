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
    basketProducts: [
      {
        name: "Laboris nostrud est",
        model: "XYZ.aba.123",
        brand: "Company 2",
        price: 10.5,
        description:
          "Velit officia voluptate reprehenderit anim cupidatat in. Consequat ut commodo Lorem qui do velit ullamco nulla. Minim dolore incididunt qui in in dolore fugiat veniam magna nulla. Do tempor proident elit eu dolore. Dolor pariatur sunt consectetur ea proident. Adipisicing proident et amet ipsum pariatur veniam ut laborum qui labore amet tempor exercitation.",
        color: "cyan",
        id: 20,
        special: true,
      },
      {
        name: "Id ullamco id duis",
        model: "TYS.trt.555",
        brand: "Company 1",
        price: 100,
        description:
          "Officia amet do quis occaecat sint ipsum magna sit id voluptate officia laboris. Aute qui dolore ullamco fugiat enim excepteur sit Lorem commodo elit non. Voluptate quis aliquip tempor occaecat Lorem culpa aliqua dolor labore excepteur sit pariatur. Reprehenderit nulla ullamco commodo in cillum incididunt magna voluptate consequat exercitation incididunt tempor. Elit occaecat aliqua dolor reprehenderit. Qui aute sunt quis laboris. Voluptate est amet minim labore pariatur officia.",
        color: "red",
        id: 12,
        special: false,
      },
    ],
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
  },

  actions,
  mutations,
});

export default store;
