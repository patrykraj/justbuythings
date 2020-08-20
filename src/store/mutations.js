const mutations = {
  setVisibleProperties({ visibleProperties }, { from, to }) {
    this.state.visibleProperties = {
      from,
      to,
    };

    if (this.state.filteredProducts.length) {
      this.state.visibleProducts = this.state.filteredProducts.slice(from, to);
    } else {
      this.state.visibleProducts = this.state.products.slice(from, to);
    }

    return visibleProperties;
  },

  handleFilterProducts({ filterProperties }, { key, val, type }) {
    switch (type) {
      case "SELECT":
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

    for (let key in this.state.filterProperties) {
      console.log(key, this.state.filterProperties[key]);
    }
  },

  // handleFilterPriceProducts({ filterProperties }, { key, val }) {
  //   console.log("szajse", filterProperties);

  //   this.state.filterProperties = {
  //     ...this.state.filterProperties,
  //     price: {
  //       ...this.state.filterProperties.price,
  //       [key]: Number(val),
  //     },
  //   };

  //   for (let key in this.state.filterProperties) {
  //     console.log(key, this.state.filterProperties[key]);
  //   }
  // },

  // deleteBook({ books }, id) {
  //   const newBooks = books.filter((book) => book.id !== id);
  //   this.state.books = newBooks;
  // },
};

export default mutations;
