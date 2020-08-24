import axios from "axios";

const actions = {
  getProducts() {
    axios
      .get(
        "https://my-json-server.typicode.com/patrykraj/product-comparison/products"
      )
      .then((res) => {
        this.state.products = res.data;
        this.state.visibleProducts = res.data.slice(
          this.state.visibleProperties.from,
          this.state.visibleProperties.to
        );
      })
      .catch((err) => (this.state.failedToFetch = err));
  },
};

export default actions;
