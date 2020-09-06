<template>
  <div>
    <Modal txt="Are you sure?" />
    <div class="basket-container">
      <NavBar />
      <BasketEmpty v-if="!basketProducts.length" />
      <div v-else class="basket">
        <ul class="basket-items">
          <li class="section-header">
            <h2>Basket ({{ basketProducts.length }} items)</h2>
          </li>
          <BasketProduct
            v-for="product in basketProducts"
            :key="product.id"
            :product="product"
            @handleRemove="handleRemoveFromBasket"
          />
        </ul>
        <BasketSummary />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import BasketProduct from "../components/basket/BasketProduct";
import BasketSummary from "../components/basket/BasketSummary";
import BasketEmpty from "../components/basket/BasketEmpty";
import Modal from "../components/shared/modal/Modal";

import { mapState, mapMutations } from "vuex";

export default {
  name: "BasketPage",
  components: {
    NavBar,
    Footer,
    BasketProduct,
    BasketSummary,
    BasketEmpty,
    Modal,
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

@media (max-width: 700px) {
  .basket {
    flex-flow: column;
  }

  .basket-items {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .basket-container {
    min-height: calc(100vh - 290px);
  }
}
</style>
