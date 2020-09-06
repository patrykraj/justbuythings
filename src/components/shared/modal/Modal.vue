<template>
  <Backdrop>
    <div class="modal" @click.stop="handleStop">
      <div class="modal-top">
        <button class="hide" @click="handleCancelAction">&times;</button>
      </div>
      <p class="modal-text">{{ txt }}</p>
      <div class="modal-bottom">
        <button class="modal-btn confirm" @click="handleStop">Confirm</button>
        <button class="modal-btn" @click="handleCancelAction">
          Cancel
        </button>
      </div>
    </div>
  </Backdrop>
</template>

<script>
import Backdrop from "./Backdrop";

import { mapMutations } from "vuex";

export default {
  name: "Modal",
  props: {
    txt: String,
  },
  components: {
    Backdrop,
  },
  methods: {
    ...mapMutations(["handleCancelAction"]),
    handleStop() {},
  },
};
</script>

<style>
.modal {
  background: white;
  width: 90%;
  max-width: 400px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  transform: translateY(-100px);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}

.modal-top,
.modal-bottom {
  background: #2c3e50;
  width: 100%;
  padding: 5px;
  text-align: right;
}

.modal-bottom {
  text-align: center;
  padding: 10px 5px;
  display: flex;
  justify-content: space-around;
}

.hide {
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  color: crimson;
}

.modal-text {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.modal-btn {
  background: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0;
  width: 25%;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s all;
}

.modal-btn:hover {
  background: #2c3e50;
  color: white;
  border: 1px solid white;
}

.modal-btn:focus {
  outline: none;
}

.modal-btn.confirm {
  background: #42b883;
  color: white;
}
</style>
