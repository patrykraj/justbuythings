<template>
  <form class="auth-form" v-on:submit.prevent>
    <label for="name" class="auth-input-row">
      <span class="auth-input-desc">Name</span>
      <input
        class="auth-input"
        type="text"
        id="name"
        v-model="userData.name"
        name="name"
        placeholder="name"
      />
    </label>
    <label for="lastname" class="auth-input-row">
      <span class="auth-input-desc">Lastname</span>
      <input
        class="auth-input"
        type="text"
        id="lastname"
        v-model="userData.lastname"
        name="lastname"
        placeholder="lastname"
      />
    </label>
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
      <span class="auth-input-desc"> Password</span>
      <input
        class="auth-input"
        type="password"
        id="password"
        v-model="userData.password"
        name="password"
        placeholder="password"
      />
    </label>
    <label for="repeatPassword" class="auth-input-row">
      <span class="auth-input-desc"> Repeat password</span>
      <input
        class="auth-input"
        type="password"
        id="repeatPassword"
        v-model="userData.repeatPassword"
        name="repeatPassword"
        placeholder="repeat password"
      />
    </label>
    <Button @clicked="$emit('handleRegister', userData)" txt="Sign up" />
  </form>
</template>

<script>
import Button from "../shared/Button";

export default {
  name: "RegisterForm",
  components: {
    Button,
  },
  data: function() {
    return {
      userData: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  },
};
</script>
