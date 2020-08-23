const mutations = {
  setVisibleProperties({ visibleProperties }, { from, to }) {
    this.state.visibleProperties = {
      from,
      to,
    };

    return visibleProperties;
  },

  sortList({ products }, val) {
    const activeList = this.state.filteredProducts.length
      ? this.state.filteredProducts
      : this.state.products;

    if (val === "ascending") {
      activeList.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.state.sorting = val;
    } else {
      activeList.sort((a, b) => (a.price > b.price ? -1 : 1));
      this.state.sorting = val;
    }

    return products;
  },

  addToCompared({ comparedProducts }, item) {
    if (this.state.comparedProducts.length < 3) {
      let itemValid = true;

      this.state.comparedProducts.map((product) => {
        if (product.id === item.id) {
          console.log("product already in the list");
          itemValid = false;
        }
      });

      if (itemValid) this.state.comparedProducts.push(item);
    }

    return comparedProducts;
  },

  removeFromCompared({ comparedProducts }, id) {
    const newList = this.state.comparedProducts.filter(
      (product) => product.id !== id
    );

    this.state.comparedProducts = newList;

    return comparedProducts;
  },

  setPage({ selectedPage }, page) {
    this.state.selectedPage = page;

    return selectedPage;
  },

  handleFilterProducts({ filterProperties }, { key, val, type }) {
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
        console.log(filterProperties);
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

    this.state.visibleProperties = {
      from: 0,
      to: this.state.itemsPerPage,
    };

    this.state.selectedPage = 0;

    this.state.filteredProducts = newList;
  },
};

export default mutations;
