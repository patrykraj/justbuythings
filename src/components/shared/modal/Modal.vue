<template>
  <Backdrop>
    <div
      class="modal-container"
      :class="
        confirmAction || loadingAction || successAction || errorAction
          ? 'show'
          : null
      "
      @click.stop
    >
      <div v-if="loadingAction" class="modal-loading">
        <h2>Processing...</h2>
      </div>
      <div class="modal-error" v-else-if="errorAction">
        <div class="modal-top">
          <button class="hide" @click="handleCancelAction">&times;</button>
        </div>
        <h2>Error occured:</h2>
        <p>{{ errorAction }}</p>
        <p>Please reload the page or try again later.</p>
      </div>
      <div v-else-if="successAction" class="modal-success">
        <div class="modal-top">
          <button class="hide" @click="handleCancelAction">&times;</button>
        </div>
        <h2>{{ successAction }}</h2>
        <div class="modal-bottom">
          <button class="modal-btn confirm" @click="handleCancelAction">
            Confirm
          </button>
        </div>
      </div>
      <div class="modal" v-else>
        <div class="modal-top">
          <button class="hide" @click="handleCancelAction">&times;</button>
        </div>
        <p class="modal-text">{{ txt }}</p>
        <div class="modal-bottom">
          <button class="modal-btn confirm" @click="handlePropsFunction">
            Confirm
          </button>
          <button class="modal-btn" @click="handleCancelAction">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Backdrop>
</template>

<script>
import Backdrop from "./Backdrop";

import { mapState, mapMutations } from "vuex";

export default {
  name: "Modal",
  props: {
    txt: String,
  },
  components: {
    Backdrop,
  },
  computed: {
    ...mapState([
      "loadingAction",
      "errorAction",
      "confirmAction",
      "successAction",
    ]),
  },
  methods: {
    ...mapMutations(["handleCancelAction"]),
    handlePropsFunction() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.modal-container {
  background: white;
  width: 90%;
  max-width: 400px;
  height: 250px;
  border-radius: 5px;
  overflow: hidden;
  transform: translate(-500%, -100px);
  transition: 0.3s all;
}

.modal-container.show {
  transform: translate(0, -100px);
}

.modal,
.modal-success {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}

.modal-error,
.modal-loading {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.modal-loading {
  height: 100%;
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

.hide:focus {
  outline: none;
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
