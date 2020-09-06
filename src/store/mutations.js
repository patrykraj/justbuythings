const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("basket")) {
      const objects = JSON.parse(localStorage.getItem("basket"));

      state.basketProducts = objects;
    }
  },

  addToBasket({ basketProducts }, selectedProduct) {
    let valid = true;

    basketProducts.map((basketProduct) => {
      if (basketProduct.id === selectedProduct.id) valid = false;
    });

    if (valid) {
      selectedProduct = {
        ...selectedProduct,
        quantity: 1,
      };
      basketProducts.push(selectedProduct);
      localStorage.setItem("basket", JSON.stringify(basketProducts));
    }
  },

  removeFromBasket({ basketProducts }, id) {
    const newBasket = basketProducts.filter((product) => product.id !== id);

    this.state.basketProducts = newBasket;
    localStorage.setItem("basket", JSON.stringify(newBasket));
  },

  setProductQuantity({ basketProducts }, { id, quantity }) {
    const newBasket = basketProducts.map((product) => {
      if (product.id === id) {
        product.quantity = quantity;
      }
      return product;
    });

    this.state.basketProducts = newBasket;
  },

  setVisibleProperties(state, { from, to }) {
    state.visibleProperties = {
      from,
      to,
    };
  },

  sortList(state, val) {
    const activeList = state.filteredProducts.length
      ? state.filteredProducts
      : state.products;

    if (val === "ascending") {
      activeList.sort((a, b) => (a.price > b.price ? 1 : -1));
      state.sorting = val;
    } else {
      activeList.sort((a, b) => (a.price > b.price ? -1 : 1));
      state.sorting = val;
    }
  },

  addToCompared(state, item) {
    if (state.comparedProducts.length < 3) {
      let itemValid = true;

      state.comparedProducts.map((product) => {
        if (product.id === item.id) {
          itemValid = false;
        }
      });

      if (itemValid) state.comparedProducts.push(item);
    }
  },

  removeFromCompared(state, id) {
    const newList = state.comparedProducts.filter(
      (product) => product.id !== id
    );

    state.comparedProducts = newList;
  },

  setPage(state, page) {
    state.selectedPage = page;
  },

  handleFilterProducts(state, { key, val, type }) {
    switch (type) {
      case "SEARCH":
        this.state.filterProperties = {
          ...this.state.filterProperties,
          [key]: val,
        };
        break;

      case "INPUT":
        this.state.filterProperties = {
          ...this.state.filterProperties,
          price: {
            ...this.state.filterProperties.price,
            [key]: Number(val),
          },
        };
        break;

      case "CHECKBOX":
        if (!this.state.filterProperties[key].includes(val)) {
          this.state.filterProperties = {
            ...this.state.filterProperties,
            [key]: [...this.state.filterProperties[key], val],
          };
        } else {
          this.state.filterProperties = {
            ...this.state.filterProperties,
            [key]: this.state.filterProperties[key].filter(
              (color) => color !== val
            ),
          };
        }
        break;

      default:
        this.$store.resetFilters();
    }

    this.state.filterActive = false;

    const newList = [];

    this.state.products.map((product) => {
      let productIsValid = true;
      if (this.state.filterProperties.name) {
        this.state.filterActive = true;

        if (
          productIsValid &&
          this.state.filterProperties.name.trim().length >= 3 &&
          (product.name
            .toLowerCase()
            .includes(this.state.filterProperties.name.toLowerCase()) ||
            product.model
              .toLowerCase()
              .includes(this.state.filterProperties.name.toLowerCase()))
        )
          productIsValid = true;
        else {
          productIsValid = false;
        }
      }

      if (this.state.filterProperties.brand) {
        this.state.filterActive = true;

        if (
          productIsValid &&
          product.brand === this.state.filterProperties.brand
        ) {
          productIsValid = true;
        } else {
          productIsValid = false;
        }
      }

      if (this.state.filterProperties.colors.length) {
        this.state.filterActive = true;

        if (
          productIsValid &&
          this.state.filterProperties.colors.includes(product.color)
        ) {
          productIsValid = true;
        } else {
          productIsValid = false;
        }
      }

      if (
        this.state.filterProperties.price.from > 0 ||
        this.state.filterProperties.price.to > 0
      ) {
        this.state.filterActive = true;
        if (
          productIsValid &&
          this.state.filterProperties.price.to >=
            this.state.filterProperties.price.from &&
          product.price >= this.state.filterProperties.price.from &&
          product.price <= this.state.filterProperties.price.to
        ) {
          productIsValid = true;
        } else {
          productIsValid = false;
        }
      }

      if (productIsValid) newList.push(product);
    });

    state.visibleProperties = {
      from: 0,
      to: this.state.itemsPerPage,
    };

    state.selectedPage = 0;

    state.filteredProducts = newList;
  },

  resetFilters() {
    const initialFilters = {
      name: "",
      brand: "",
      colors: [],
      price: {
        from: null,
        to: null,
      },
    };

    const filterActive = false;

    this.state.filterProperties = initialFilters;
    this.state.filterActive = filterActive;
    this.state.filteredProducts = [];
  },

  resetAuthError(state) {
    state.authError = null;
  },

  handleConfirmAction(state) {
    state.confirmAction = true;
  },

  handleCancelAction(state) {
    state.errorAction = null;
    state.successAction = null;
    state.confirmAction = false;
  },

  setCancelId(state, id) {
    state.cancelId = id;
  },
};

export default mutations;
