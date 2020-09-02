<template>
  <form class="auth-form" v-on:submit.prevent>
    <label for="email" class="auth-input-row">
      <span class="auth-input-desc">Email</span>
      <input
        class="auth-input"
        id="email"
        v-model="userData.email"
        name="email"
        type="email"
        placeholder="email"
      />
    </label>
    <label for="password" class="auth-input-row">
      <span class="auth-input-desc">Password</span>
      <input
        class="auth-input"
        id="password"
        v-model="userData.password"
        name="password"
        type="password"
        placeholder="password"
      />
    </label>
    <Button @clicked="$emit('handleLogin', userData)" txt="Sign in" />
  </form>
</template>

<script>
import Button from "../shared/Button";

export default {
  name: "LoginForm",
  components: {
    Button,
  },
  data: function() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style>
.auth-form {
  width: 100%;
  max-width: 450px;
  padding: 1rem;
  margin: 1rem 0;
  border: 4px solid rgba(0, 0, 0, 0.1);
}

.auth-input-row {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.auth-input-desc {
  display: flex;
  flex: 1;
  align-items: center;
  text-align: left;
}

.auth-input {
  width: 100%;
  flex: 2;
  padding: 5px;
  margin-left: 1rem;
  border: 2px solid #2c3e50;
  display: inline-block;
}
</style>
