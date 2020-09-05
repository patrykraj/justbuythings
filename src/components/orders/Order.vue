<template>
  <li class="order-container">
    <h4 class="order-id">Order id: {{ product.orderId }}</h4>
    <div class="order-flex">
      <div class="order-info-container">
        <span class="order-date-header">Order date</span>
        <div class="order-dates">
          <span class="bold">{{ product.date.split("T")[0] }} </span>
          <span class="bold"
            >{{ product.date.split("T")[1].slice(0, 8) }}
          </span>
        </div>
        <router-link
          class="product-info-link"
          :to="{ name: 'product', params: { id: product.id } }"
        >
          <img class="product-image" :src="product.img" alt="product.name" />
          <p class="product-info-desc">{{ product.name }}</p>
          <p class="product-info-desc">{{ product.model }}</p>
          <p class="product-info-desc">{{ product.color }}</p>
        </router-link>
      </div>
      <div class="order-price-container">
        <div class="order-price">
          <span>Total price</span>
          <span class="bold-data bold"
            >${{ (product.price * 0.23 + product.price).toFixed(2) }}</span
          >
        </div>
        <div class="order-quantity">
          <span>Quantity</span>
          <span class="bold-data bold">{{ product.quantity }}</span>
        </div>
      </div>
      <div class="order-cancel-container">
        <Button txt="Cancel" />
      </div>
    </div>
  </li>
</template>

<script>
import Button from "../shared/Button";

export default {
  name: "Order",
  components: {
    Button,
  },
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.order-container {
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid #2c3e50;
}

.order-container:last-child {
  border-bottom: none;
}

.order-id {
  margin-top: 0;
}

.order-flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.order-date-header {
  display: block;
  margin-bottom: 5px;
}

.bold {
  font-weight: bold;
}

.bold-data {
  display: block;
  margin: 5px 0;
}

.product-image {
  width: 90px;
  margin: 10px 0;
}

.product-info-link {
  text-decoration: none;
}

.product-info-desc {
  margin: 5px 0;
  color: #2c3e50;
  font-size: 0.9rem;
}

.order-info-container {
  flex: 1 1 0;
}

.order-price-container {
  margin: 0 1.5rem;
  flex: 1 1 0;
}

.order-price {
  margin-bottom: 1rem;
}

.order-quantity {
  margin-top: 1rem;
}

@media (max-width: 415px) {
  .order-container {
    font-size: 15px;
  }

  .order-cancel-container {
    margin-top: 10px;
    flex: 1 1 0;
  }
}

@media (max-width: 300px) {
  .order-flex {
    align-items: center;
    text-align: center;
    flex-flow: column;
    flex-wrap: nowrap;
  }

  .order-price-container {
    margin-top: 10px;
  }
}
</style>
