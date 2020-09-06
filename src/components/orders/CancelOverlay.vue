<template>
  <div class="cancelled">
    <Information />
    <p class="text">Order cancelled</p>
  </div>
</template>

<script>
import Information from "vue-material-design-icons/Information.vue";

export default {
  name: "CancelledOverlay",
  components: {
    Information,
  },
};
</script>

<style scoped>
.cancelled {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-weight: bold;
}

.text {
  margin: 10px;
}
</style>
