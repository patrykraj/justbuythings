import axios from "axios";
import jwt_decode from "jwt-decode";

const actions = {
  getProducts() {
    this.state.loading = true;

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
        this.state.loading = false;
      })
      .catch((err) => {
        this.state.failedToFetch = err;
        this.state.loading = false;
      });
  },
  getProduct({ state }, { id }) {
    state.loading = true;

    axios
      .get(
        `https://my-json-server.typicode.com/patrykraj/product-comparison/products/${id}`
      )
      .then((res) => {
        state.selectedProduct = res.data;

        state.loading = false;
      })
      .catch((err) => {
        state.failedToFetch = err;
        state.loading = false;
      });
  },
  async login(state) {
    console.log(state);

    axios
      .post(
        "http://localhost:5000/api/user/login",
        {
          email: "spidermanXDDD@email.com",
          password: "supersimplepasswordXD",
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        const token = res.data;
        const decoded = jwt_decode(token);
        console.log(decoded);
      })
      .catch((err) => console.log("CANT LOGIN", err));
  },
};

export default actions;
