<template>
  <form class="auth-form" v-on:submit.prevent>
    <label class="auth-input-row">
      <span class="auth-input-desc">Name</span>
      <input class="auth-input" type="text" placeholder="name" />
    </label>
    <label class="auth-input-row">
      <span class="auth-input-desc">Lastname</span>
      <input class="auth-input" type="text" placeholder="lastname" />
    </label>
    <label class="auth-input-row">
      <span class="auth-input-desc">Email</span>
      <input class="auth-input" type="email" placeholder="email" />
    </label>
    <label class="auth-input-row">
      <span class="auth-input-desc"> Password</span>
      <input class="auth-input" type="password" placeholder="password" />
    </label>
    <label class="auth-input-row">
      <span class="auth-input-desc"> Repeat password</span>
      <input class="auth-input" type="password" placeholder="repeat password" />
    </label>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>
