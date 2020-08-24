<template>
  <div class="loader-container">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="loader-text">Loading...</p>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.loader-container {
  padding: 4rem 0;
  height: 300px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.loader {
  display: inline-block;
  position: relative;
  margin: 0 auto;
  width: 80px;
  height: 80px;
}

.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #2c3e50;
  border-radius: 50%;
  animation: rotate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2c3e50 transparent transparent transparent;
}

.loader div:nth-child(1) {
  animation-delay: -0.45s;
}

.loader div:nth-child(2) {
  animation-delay: -0.3s;
}

.loader div:nth-child(3) {
  animation-delay: -0.15s;
}

.loader-text {
  font-weight: bold;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
