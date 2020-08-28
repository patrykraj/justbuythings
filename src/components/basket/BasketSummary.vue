<template>
  <div class="basket-summary">
    <h2>Total price</h2>
    <p>
      <span>Total</span><span>${{ totalPrice.toFixed(2) }}</span>
    </p>
    <p><span>Delivery</span><span>Free</span></p>
    <Button :payment="true" txt="Process to payment" />
  </div>
</template>

<script>
import Button from "../shared/Button";

import { mapState, mapMutations } from "vuex";

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
  },
  methods: {
    ...mapMutations(["removeFromBasket"]),
    handleRemoveFromBasket(id) {
      this.removeFromBasket(id);
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
