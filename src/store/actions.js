import axios from "axios";
import jwt_decode from "jwt-decode";
import { router } from "../main.js";

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
  async login({ state }, user) {
    state.authError = null;
    state.authLoading = true;

    axios
      .post("http://localhost:5000/api/user/login", user, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        const token = res.data;
        const decoded = jwt_decode(token);

        state.tokenId = token;
        state.userData = decoded;
        state.authLoading = false;

        localStorage.setItem("token", JSON.stringify(token));

        router.push("/");
      })
      .catch((err) => {
        state.authError = err.response.data;
        state.authLoading = false;
      });
  },
  async register({ state }, user) {
    state.authError = null;
    state.authLoading = true;

    axios
      .post("http://localhost:5000/api/user/register", user, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        const token = res.data;
        const decoded = jwt_decode(token);

        state.tokenId = token;
        state.userData = decoded;
        state.authLoading = false;

        localStorage.setItem("token", JSON.stringify(token));

        router.push("/");
      })
      .catch((err) => {
        state.authError = err.response.data;
        state.authLoading = false;
      });
  },
  logout({ state }) {
    state.tokenId = null;
    state.userData = null;

    localStorage.removeItem("token");
  },
  async tryAutoLogin({ state }) {
    if (!localStorage.getItem("token")) return;

    const token = JSON.parse(localStorage.getItem("token"));

    state.authLoading = true;

    axios
      .get("http://localhost:5000/api/user/getuser", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        state.userData = res.data;
        state.tokenId = token;
        state.authLoading = false;
      })
      .catch((err) => {
        state.authError = err.response.data;
        state.authLoading = false;
      });
  },
};

export default actions;
