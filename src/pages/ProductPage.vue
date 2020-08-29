<template>
  <div>
    <div class="product-page page">
      <NavBar />
      <Loader v-if="this.loading" />
      <div v-else-if="this.selectedProduct" class="product-container">
        <router-link class="go-back" to="/">Go back to products</router-link>
        <div class="img-container big">
          <img
            class="product-image"
            v-bind:src="this.selectedProduct.img"
            :alt="this.selectedProduct.name"
          />
        </div>
        <div class="product-info">
          <p class="product-brand">{{ this.selectedProduct.brand }}</p>
          <h2 class="product-name">
            {{ this.selectedProduct.name }}
            <span class="small-title">
              - model:
              {{ this.selectedProduct.model }}
            </span>
            {{ this.selectedProduct.special ? "*" : null }}
          </h2>
          <p>
            ${{
              (
                this.selectedProduct.price * 0.23 +
                this.selectedProduct.price
              ).toFixed(2)
            }}
            (incl. VAT)
          </p>
          <p>
            Color: <strong>{{ this.selectedProduct.color }}</strong>
          </p>
          <div class="buy-container">
            <Button
              class="buy-btn"
              txt="Add to basket"
              :special="true"
              @clicked="handleAddToBasket"
            />
          </div>
          <ul class="product-additional-list">
            <li>
              <button @click="this.setDescReveal">
                <span>Description</span><span class="rotate">^</span>
              </button>
              <div
                class="desc-container"
                :class="this.descReveal ? 'open' : null"
              >
                <p>
                  {{ this.selectedProduct.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Error v-else err="Product not found." />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

import Button from "../components/shared/Button";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/sections/Footer";
import Loader from "../components/shared/Loader.vue";
import Error from "../components/shared/Error.vue";

export default {
  name: "ProductPage",
  props: {
    id: [Number, String],
  },
  components: {
    Button,
    NavBar,
    Footer,
    Loader,
    Error,
  },
  data: function() {
    return {
      descReveal: false,
    };
  },
  computed: {
    ...mapState(["selectedProduct", "basketProducts", "loading"]),
  },
  methods: {
    ...mapMutations(["addToBasket"]),
    setDescReveal() {
      this.descReveal = !this.descReveal;
    },
    handleAddToBasket() {
      this.addToBasket(this.selectedProduct);
    },
  },
  created: function() {
    this.$store.dispatch("getProduct", { id: this.id });
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: space-between;
  min-height: calc(100vh - 303px);
}

.product-container {
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
}

.product-container > * {
  flex: 1;
}

.go-back {
  position: absolute;
  top: 100px;
  color: #2c3e50;
  text-decoration: none;
  transition: 0.2s all;
}

.go-back:hover {
  text-decoration: underline;
  color: #0a1c38;
}

.product-brand {
  margin-top: 0;
  font-weight: bold;
  text-decoration: underline;
}

.product-additional-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-additional-list li {
  border-top: 1px solid rgba(0, 0, 0, 0.34);
  border-bottom: 1px solid rgba(0, 0, 0, 0.34);
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.product-additional-list li button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  width: 100%;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
}

.product-additional-list li button:focus {
  outline: none;
}

.product-additional-list li .desc-container {
  overflow: hidden;
  max-height: 0;
  transition: all 0.5s;
}

.product-additional-list li .desc-container.open {
  max-height: 500px;
}

.product-additional-list button .rotate {
  transform: rotate(180deg);
}

.img-container {
  max-width: 100%;
  max-height: 100%;
  margin-right: 1rem;
}

.product-info {
  margin: 0 auto;
  margin-left: 1rem;
  text-align: left;
}

.product-name {
  text-transform: uppercase;
}

.small-title {
  text-transform: lowercase;
  font-size: 1.4rem;
}

.buy-container {
  margin-bottom: 1rem;
}

.buy-btn {
  width: 100%;
}

.buy-btn:hover::before {
  background: #64daa5;
}

@media (max-width: 768px) {
  .product-container {
    flex-flow: column;
  }

  .img-container {
    margin-right: 0;
  }

  .img {
    margin: 0 auto;
  }

  .product-info {
    margin: 2rem auto;
    max-width: 527px;
  }
}
</style>
