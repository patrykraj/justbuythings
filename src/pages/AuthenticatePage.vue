<template>
  <div>
    <NavBar />
    <div class="auth-container">
      <h2>{{ loginMode ? "Sign in" : "Sign up" }}</h2>
      <LoginForm v-if="loginMode" @handleLogin="handleLogin" />
      <RegisterForm v-else @handleRegister="handleRegister" />
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
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

import { mapActions } from "vuex";

export default {
  name: "AuthenticatePage",
  components: {
    NavBar,
    Footer,
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
    switchMode() {
      this.loginMode = !this.loginMode;
    },
    handleLogin(data) {
      console.log(data, "userdata");
      //  this.login();
    },
    handleRegister() {
      console.log("register");
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
