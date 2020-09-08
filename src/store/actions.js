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
      .post("https://aqueous-sea-73955.herokuapp.com/api/user/login", user, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
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
      .post("https://aqueous-sea-73955.herokuapp.com/api/user/register", user, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
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
      .get("https://aqueous-sea-73955.herokuapp.com/api/user/getuser", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        state.userData = res.data;
        state.authLoading = false;
      })
      .catch((err) => {
        state.authError = err.response.data;
        state.authLoading = false;
      });
  },
  async buyProducts({ state }) {
    state.loadingAction = true;
    state.confirmAction = false;
    state.errorAction = null;
    state.successAction = null;

    const orderId = Math.random()
      .toString(36)
      .substr(2, 9);

    const products = [];
    state.basketProducts.map((product) => {
      const newProduct = {
        price: product.price * product.quantity,
        quantity: product.quantity,
        name: product.name,
        model: product.model,
        brand: product.brand,
        color: product.color,
        img: product.img,
        id: product.id,
        date: new Date(),
        orderId,
        renderId: Math.random()
          .toString(36)
          .substr(2, 9),
        cancelled: false,
      };

      products.push(newProduct);
    });

    axios
      .patch("https://aqueous-sea-73955.herokuapp.com/api/orders/buy", {
        email: state.userData.email,
        products: [...products],
        date: new Date(),
      })
      .then((res) => {
        state.userData.transactions = res.data;
        state.basketProducts = [];

        const newBasket = [];
        localStorage.setItem("basket", JSON.stringify(newBasket));
        state.loadingAction = false;
        state.successAction = "Transaction successful";
      })
      .catch((err) => {
        state.errorAction = err;
        state.loadingAction = false;
      });
  },
  async cancelOrder({ state }) {
    state.loadingAction = true;
    state.confirmAction = false;
    state.errorAction = null;
    state.successAction = null;

    const data = {
      id: state.cancelId,
      email: state.userData.email,
    };

    axios
      .patch("https://aqueous-sea-73955.herokuapp.com/api/orders/cancel", data)
      .then((res) => {
        state.userData.transactions = res.data;
        state.loadingAction = false;
        state.successAction = "Transaction has been cancelled";
      })
      .catch((err) => {
        state.loadingAction = false;
        state.errorAction = err;
      });
  },
};

export default actions;
