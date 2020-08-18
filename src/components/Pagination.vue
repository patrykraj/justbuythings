<template>
  <div class="pagination-container">
    <button @click="handleSetPage('-')">
      left
    </button>
    <button v-for="btn in this.buttons" :key="btn.id" @click="btn.click">
      {{ btn.txt }}
    </button>
    <button @click="handleSetPage('+')">
      {{ ">" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    productsQuantity: Number,
    setVisibleProperties: Function,
  },
  data() {
    return {
      buttons: [],
      itemsPerPage: 4,
      selectedPage: 0,
    };
  },
  methods: {
    handleSetPage(val) {
      if (val === "-" && this.selectedPage) {
        this.setVisibleProperties(
          (this.selectedPage - 1) * this.itemsPerPage,
          this.selectedPage * this.itemsPerPage
        );
        this.selectedPage = this.selectedPage - 1;
      } else if (
        val === "+" &&
        this.selectedPage <
          Math.floor(this.productsQuantity / this.itemsPerPage)
      ) {
        this.setVisibleProperties(
          (this.selectedPage + 1) * this.itemsPerPage,
          (this.selectedPage + 2) * this.itemsPerPage
        );
        this.selectedPage = this.selectedPage + 1;
      }
    },
  },
  created: function() {
    const newButtons = [];
    for (
      let i = 0;
      i < Math.ceil(this.productsQuantity / this.itemsPerPage);
      i++
    ) {
      const btn = {
        id: i,
        txt: i + 1,
        click: () => {
          this.selectedPage = i;
          this.setVisibleProperties(
            i * this.itemsPerPage,
            (i + 1) * this.itemsPerPage
          );
        },
      };

      newButtons.push(btn);
    }

    this.buttons = newButtons;
  },
};
</script>

<style scoped>
.pagination-container {
  padding: 1rem 0 2rem;
}

button {
  height: 40px;
  width: 40px;
  background: transparent;
  border: 2px solid #2c3e50;
  font-weight: bold;
  cursor: pointer;
}

button:nth-child(even) {
  border-left: none;
  border-right: none;
}

button:first-child {
  border-radius: 5px 0 0 5px;
}

button:last-child {
  border-radius: 0 5px 5px 0;
}
</style>
