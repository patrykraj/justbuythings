<template>
  <button
    :class="special ? 'special-btn' : null"
    @click="executePropsFunction"
    :disabled="disabled"
  >
    {{ txt }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    txt: String,
    special: Boolean,
    disabled: Boolean,
  },
  methods: {
    executePropsFunction() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: none;
  border: 2px solid #2c3e50;
  margin: 5px;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  background: #2c3e50;
  color: rgb(245, 245, 245);
}

button:disabled {
  color: white;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(150, 150, 150);
}

button:disabled:hover {
  cursor: default;
}

button.special-btn {
  color: rgb(245, 245, 245);
}

button.special-btn:hover {
  background: transparent;
}

button.special-btn:hover::before {
  transform: translate(-8px, -8px);
}

button.special-btn::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 4px;
  left: 4px;
  background: #42b883;
  transition: all 0.3s cubic-bezier(0, -0.19, 0.99, 1.6);
}

button.special-btn:disabled:hover {
  background: rgba(0, 0, 0, 0.2);
}

button.special-btn:disabled:hover::before {
  transform: translate(0, 0);
}

button.special-btn:disabled::before {
  background: rgba(0, 0, 0, 0.2);
}
</style>
