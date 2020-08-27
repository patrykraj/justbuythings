<template>
  <div>
    <div class="basket-container">
      <NavBar />
      <div class="basket">
        <ul class="basket-items">
          <li class="section-header">
            <h2>Basket ({{ basketProducts.length }} items)</h2>
          </li>
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
          <Button :payment="true" txt="Process to payment" />
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
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1rem;
}

.section-header {
  padding: 1rem;
  background: whitesmoke;
  margin-bottom: -5px;
}

.section-header h2 {
  margin: 0;
  margin-bottom: -5px;
}

.basket-items {
  margin: 0;
  padding: 0;
  flex: 3;
  text-align: left;
  list-style: none;
  margin-right: 1rem;
}

.basket-summary {
  background: whitesmoke;
  flex: 1;
  margin-left: 1rem;
  padding: 1rem;
}

.basket-summary h2 {
  margin-top: 0;
}

.basket-summary p {
  display: flex;
  justify-content: space-between;
}
</style>
