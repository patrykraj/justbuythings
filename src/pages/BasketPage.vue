<template>
  <div>
    <div class="basket-container">
      <NavBar />
      <div class="basket">
        <ul class="basket-items">
          <li><h2>Basket</h2></li>
          <BasketProduct
            v-for="product in basketProducts"
            :key="product.id"
            :product="product"
          />
        </ul>
        <div class="basket-summary">
          <h2>Total price</h2>
          <p><span>Total</span><span>$50.00</span></p>
          <p><span>Delivery</span><span>Free</span></p>
          <Button txt="Process to payment" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/shared/Footer";
import BasketProduct from "../components/basket/BasketProduct";
import Button from "../components/shared/Button";

import { mapState } from "vuex";

export default {
  name: "SiteContainer",
  components: {
    NavBar,
    Footer,
    BasketProduct,
    Button,
  },
  computed: {
    ...mapState(["basketProducts"]),
  },
};
</script>

<style>
.basket-container {
  min-height: calc(100vh - 303px);
}

.basket {
  margin-top: 90px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1rem;
}

.basket-items {
  margin: 0;
  padding: 0;
  flex: 3;
  background: whitesmoke;
  text-align: left;
  list-style: none;
  margin-right: 1rem;
}

.basket-summary {
  background: whitesmoke;
  margin-left: 1rem;
}

.basket-summary {
  flex: 1;
}
</style>
