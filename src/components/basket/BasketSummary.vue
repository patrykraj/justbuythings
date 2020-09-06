<template>
  <div class="basket-summary">
    <h2>Total price</h2>
    <p>
      <span>Total</span><span>${{ totalPrice.toFixed(2) }}</span>
    </p>
    <p><span>Delivery</span><span>Free</span></p>
    <router-link class="redirect-link" v-if="!isAuthenticated" to="/auth"
      >Sign in to buy</router-link
    >
    <Button v-else @clicked="handleConfirm" :payment="true" txt="Buy" />
  </div>
</template>

<script>
import Button from "../shared/Button";

import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "BasketSummary",
  components: {
    Button,
  },
  data: function() {
    return {
      totalPrice: 0,
    };
  },
  computed: {
    ...mapState(["basketProducts"]),
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapMutations(["removeFromBasket", "handleConfirmAction"]),
    handleRemoveFromBasket(id) {
      this.removeFromBasket(id);
    },
    handleConfirm() {
      this.handleConfirmAction();
    },
  },
  mounted: function() {
    this.$watch(() => {
      let price = 0;
      this.basketProducts.map((product) => {
        if (product.quantity) price += product.price * product.quantity;
        else price += product.price;
      });
      price = price * 0.23 + price;
      this.totalPrice = price;
    });
  },
};
</script>

<style>
.redirect-link {
  border: 2px solid #2c3e50;
  text-decoration: none;
  color: #2c3e50;
  width: 100%;
  display: block;
  padding: 10px 0;
  background: white;
  font-weight: bold;
  transition: 0.3s all;
}

.redirect-link:hover {
  background: #2c3e50;
  color: white;
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

@media (max-width: 700px) {
  .basket-summary {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
