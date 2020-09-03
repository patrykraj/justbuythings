<template>
  <div>
    <NavBar />
    <div class="auth-container">
      <h2>{{ loginMode ? "Sign in" : "Sign up" }}</h2>
      <LoginForm v-if="loginMode" @handleLogin="handleLogin" />
      <RegisterForm v-else @handleRegister="handleRegister" />
      <p v-if="authError" class="auth-error">
        <Alert /><span class="error-text">{{ authError }}</span>
      </p>
      <button class="mode-switch" @click="switchMode">
        {{
          loginMode
            ? "Don't have an account? Create one here"
            : "Already have and account? Login"
        }}
      </button>
      <AuthLoader v-if="authLoading" />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import Footer from "../components/sections/Footer";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import AuthLoader from "../components/auth/AuthLoader";
import Alert from "vue-material-design-icons/Alert.vue";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "AuthenticatePage",
  components: {
    NavBar,
    Footer,
    LoginForm,
    RegisterForm,
    AuthLoader,
    Alert,
  },
  data: function() {
    return {
      loginMode: true,
    };
  },
  computed: {
    ...mapState(["authError", "authLoading"]),
  },
  methods: {
    ...mapActions(["login", "register"]),
    ...mapMutations(["resetAuthError"]),
    switchMode() {
      this.loginMode = !this.loginMode;
      this.resetAuthError();
    },
    handleLogin(data) {
      const user = {
        ...data,
      };

      this.login(user);
    },
    handleRegister(data) {
      const user = {
        ...data,
      };

      this.register(user);
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
  position: relative;
}

.auth-error {
  display: flex;
  align-items: center;
  background: rgba(255, 0, 0, 0.4);
  color: rgb(150, 0, 0);
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.alert-icon {
  display: flex;
  align-items: center;
}

.error-text {
  margin-left: 10px;
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
