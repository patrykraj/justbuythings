<template>
  <div>
    <NavBar />
    <h2>Sign in</h2>
    <Button @clicked="handleLogin" txt="Login" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import Button from "../components/shared/Button";

import { mapActions } from "vuex";

export default {
  name: "AuthenticatePage",
  components: {
    NavBar,
    Footer,
    Button,
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.login();
    },
  },
};
</script>

<style></style>
