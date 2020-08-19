<template>
  <button :class="special ? 'special-btn' : null">{{ txt }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    txt: String,
    special: Boolean,
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
</style>
