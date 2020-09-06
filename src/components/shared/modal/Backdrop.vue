<template>
  <div
    class="backdrop"
    :class="confirmAction ? 'show' : null"
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
    ...mapState(["confirmAction"]),
  },
  methods: {
    ...mapMutations(["handleCancelAction"]),
  },
};
</script>

<style>
.backdrop {
  position: absolute;
  top: 70px;
  z-index: 1;
  opacity: 0;
  width: 0;
  height: calc(100% - 40px);
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.3s all;
}

.backdrop.show {
  width: 100%;
  opacity: 1;
}
</style>
