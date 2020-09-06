<template>
  <div
    class="backdrop"
    :class="confirmAction || errorAction || loadingAction ? 'show' : null"
    @click="loadingAction ? handleCancelAction : null"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Backdrop",
  computed: {
    ...mapState(["confirmAction", "errorAction", "loadingAction"]),
  },
  methods: {
    ...mapMutations(["handleCancelAction"]),
  },
};
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 70px;
  z-index: 1;
  opacity: 0;
  transform: scale(0);
  width: 100%;
  height: calc(100% - 40px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.2s all;
}

.backdrop.show {
  opacity: 1;
  transform: scale(1);
}
</style>
