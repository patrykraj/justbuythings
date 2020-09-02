<template>
  <form class="auth-form" v-on:submit.prevent>
    <label class="auth-input-row">
      <span class="auth-input-desc">Email</span>
      <input class="auth-input" type="email" placeholder="email" />
    </label>
    <label class="auth-input-row">
      <span class="auth-input-desc"> Password</span>
      <input class="auth-input" type="password" placeholder="password" />
    </label>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
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
