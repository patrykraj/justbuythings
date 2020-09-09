<template>
  <li class="product-listed" :class="product.special ? 'special' : null">
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="img-container">
        <img
          SameSite="None"
          class="product-image"
          v-bind:src="product.img"
          :alt="product.name"
        />
      </div>
    </router-link>
    <div class="data-container">
      <router-link
        class="product-link"
        :to="{ name: 'product', params: { id: product.id } }"
        ><h3 class="product-name">{{ product.name }}</h3>
        <div>
          <span></span>
        </div>
      </router-link>
      <p class="product-model">Model: {{ product.model }}</p>
      <p>Brand: {{ product.brand }}</p>
    </div>
    <div class="price-container">
      <Button
        txt="Add to basket"
        :special="product.special"
        :disabled="checkInBasket(product)"
        @clicked="addToBasket(product)"
      />
      <button
        class="compare-btn"
        :disabled="checkInCompared(product)"
        @click="addToCompared(product)"
      >
        Compare product
      </button>
      <h4 class="price">${{ product.price.toFixed(2) }} net</h4>
      <p class="price">
        ${{ (product.price * 0.23 + product.price).toFixed(2) }} gross
      </p>
    </div>
  </li>
</template>

<script>
import Button from "../shared/Button";

import { mapState, mapMutations } from "vuex";

export default {
  name: "Product",
  props: {
    product: Object,
  },
  components: {
    Button,
  },
  data: function() {
    return {
      disabledProducts: [],
    };
  },
  methods: {
    ...mapMutations(["addToCompared", "addToBasket"]),
    checkInCompared(productToCheck) {
      let inCompared = false;

      this.comparedProducts.map((product) => {
        if (productToCheck.id === product.id) inCompared = true;
      });

      return inCompared;
    },
    checkInBasket(productToCheck) {
      let inBasket = false;

      this.basketProducts.map((product) => {
        if (productToCheck.id === product.id) inBasket = true;
      });

      return inBasket;
    },
  },
  computed: {
    ...mapState(["comparedProducts", "basketProducts"]),
  },
};
</script>

<style>
li.special {
  background: rgb(0, 0, 0, 0.1);
}

li.product-listed {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2c3e50;
  padding: 2rem 0 2rem 10px;
  text-align: left;
}

li.product-listed:last-child {
  border-bottom: none;
}

.img-container {
  max-width: 150px;
  max-height: 150px;
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
}

div.data-container {
  flex-grow: 1;
  padding: 0 15px;
}

a.product-link {
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s;
  transform-origin: center;
  display: inline-block;
  position: relative;
}

a.product-link:hover {
  color: #0a1c30;
}

a.product-link div {
  display: inline-block;
  position: absolute;
  bottom: 6px;
  height: 2px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

a.product-link span {
  width: 0;
  height: 100%;
  background: #2c3e50;
  margin: 0 auto;
  display: block;
  transition: all 0.3s;
}

a.product-link:hover span {
  width: 100%;
}

h3.product-name {
  margin-top: 0;
  margin-bottom: 7px;
}

p.product-model {
  font-size: 0.9rem;
  margin-top: 0;
}

div.price-container {
  min-width: 160px;
}

.compare-btn {
  display: block;
  margin: 8px 0 8px 5px;
  border: none;
  border-bottom: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  color: #2c3e50;
  font-weight: bold;
  padding: 5px 0;
  transition: 0.2s all;
}

.compare-btn:hover {
  border-bottom: 1px solid #2c3e50;
}

.compare-btn:disabled {
  color: rgba(0, 0, 0, 0.5);
  cursor: default;
}

.compare-btn:disabled:hover {
  border-bottom: 1px solid transparent;
}

.compare-btn:focus {
  outline: none;
}

.price {
  margin: 5px 0 5px 5px;
}

@media (max-width: 600px) {
  li.product-listed {
    max-width: 50%;
    min-width: 50%;
    flex-direction: column;
    flex: 1 0 0;
    align-items: center;
    text-align: center;
    border: none;
    padding: 2rem 0;
  }

  .compare-btn {
    margin: 8px auto;
  }

  h3.product-name {
    margin: 1rem 0;
  }
}

@media (max-width: 360px) {
  li.product-listed {
    max-width: 60%;
    min-width: 200px;
    padding-top: 0;
  }

  li + li {
    margin: 2rem 0;
  }

  .img-container {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
