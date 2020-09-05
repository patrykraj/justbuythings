<template>
  <div>
    <NavBar />
    <div class="content-wrapper">
      <Loader v-if="!userData" />
      <div v-else>
        <h2 class="page-header">Hello {{ userData.name }}</h2>
        <div class="account-info account-info-wrapper">
          <h2 class="info-header">My data</h2>
          <div class="user-data-container">
            <p class="row">
              <span class="row-header">Name</span>
              <span class="row-data">{{ userData.name }}</span>
            </p>
            <p class="row">
              <span class="row-header">Lastname</span>
              <span class="row-data">{{ userData.lastname }}</span>
            </p>
            <p class="row">
              <span class="row-header">Email</span>
              <span class="row-data">{{ userData.email }}</span>
            </p>
          </div>
        </div>
        <div class="account-orders account-info-wrapper">
          <h2 class="info-header">My orders</h2>
          <ul v-if="userData.transactions.length">
            <li v-for="order in userData.transactions" :key="order.id">
              ORDER
            </li>
          </ul>
          <h3 v-else>No orders yet.</h3>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import Loader from "../components/shared/Loader";

import { mapState, mapActions } from "vuex";

export default {
  name: "AccountPage",
  components: {
    NavBar,
    Footer,
    Loader,
  },
  computed: {
    ...mapState(["userData"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
  },
};
</script>

<style scoped>
.content-wrapper {
  min-height: calc(100vh - 303px);
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.page-header {
  font-size: 2rem;
}

.account-info-wrapper {
  background: whitesmoke;
  padding: 1rem;
  margin: 1rem 0;
}

.info-header {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #2c3e50;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.1rem;
  text-align: left;
}

.row-header {
  font-weight: bold;
  flex: 1 1 0;
  margin-right: 1rem;
}

.row-data {
  flex-grow: 5;
  flex: 5 1 0;
}
</style>
