<template>
  <div
    class="backdrop"
    :class="
      confirmAction || errorAction || loadingAction || successAction
        ? 'show'
        : null
    "
    @click="handleCancelAction"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Backdrop",
  computed: {
    ...mapState([
      "confirmAction",
      "errorAction",
      "loadingAction",
      "successAction",
    ]),
  },
  methods: {
    ...mapMutations(["handleCancelAction"]),
  },
};
</script>

<style scoped>
.backdrop {
  z-index: 1;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.2s all;
}

.backdrop.show {
  background: rgba(0, 0, 0, 0.6);
  pointer-events: auto;
}
</style>
