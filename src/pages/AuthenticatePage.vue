<template>
  <div>
    <NavBar />
    <div class="auth-container">
      <h2>{{ loginMode ? "Sign in" : "Sign up" }}</h2>
      <LoginForm v-if="loginMode" />
      <RegisterForm v-else />
      <Button v-if="loginMode" @clicked="handleLogin" txt="Sign in" />
      <Button v-else @clicked="handleRegister" txt="Sign up" />
      <button class="mode-switch" @click="switchMode">
        {{
          loginMode
            ? "Don't have an account? Create one here"
            : "Already have and account? Login"
        }}
      </button>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import Button from "../components/shared/Button";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

import { mapActions } from "vuex";

export default {
  name: "AuthenticatePage",
  components: {
    NavBar,
    Footer,
    Button,
    LoginForm,
    RegisterForm,
  },
  data: function() {
    return {
      loginMode: true,
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.login();
    },
    handleRegister() {
      console.log("register");
    },
    switchMode() {
      this.loginMode = !this.loginMode;
    },
  },
};
</script>

<style scoped>
.auth-container {
  min-height: calc(100vh - 303px);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
}

.mode-switch {
  background: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  margin-top: 10px;
  cursor: pointer;
  color: #2c3e50;
  transition: 0.3s all;
}

.mode-switch:hover {
  border-bottom: 1px solid #2c3e50;
}

.mode-switch:focus {
  outline: none;
}
</style>
