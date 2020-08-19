<template>
  <section class="compare">
    <SectionHeader title="Compare products" />
    <ul class="compare-products-list" v-if="this.compareProducts.length">
      <ComparedProduct
        v-for="product in compareProducts"
        :key="product.id"
        :product="product"
      />
    </ul>

    <h2 v-else>No selected products</h2>
  </section>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
import ComparedProduct from "../ComparedProduct.vue";

export default {
  name: "Compare",
  props: {},
  data() {
    return {
      compareProducts: [
        {
          name: "Laboris nostrud est",
          model: "XYZ.aba.123",
          brand: "Company 2",
          price: 10.5,
          description:
            "Velit officia voluptate reprehenderit anim cupidatat in. Consequat ut commodo Lorem qui do velit ullamco nulla. Minim dolore incididunt qui in in dolore fugiat veniam magna nulla. Do tempor proident elit eu dolore. Dolor pariatur sunt consectetur ea proident. Adipisicing proident et amet ipsum pariatur veniam ut laborum qui labore amet tempor exercitation.",
          color: "cyan",
          id: 20,
          special: true,
        },
        {
          name: "Id ullamco id duis",
          model: "TYS.trt.555",
          brand: "Company 1",
          price: 100,
          description:
            "Officia amet do quis occaecat sint ipsum magna sit id voluptate officia laboris. Aute qui dolore ullamco fugiat enim excepteur sit Lorem commodo elit non. Voluptate quis aliquip tempor occaecat Lorem culpa aliqua dolor labore excepteur sit pariatur. Reprehenderit nulla ullamco commodo in cillum incididunt magna voluptate consequat exercitation incididunt tempor. Elit occaecat aliqua dolor reprehenderit. Qui aute sunt quis laboris. Voluptate est amet minim labore pariatur officia.",
          color: "red",
          id: 12,
          special: false,
        },
        {
          name: "Id ullamco id duis",
          model: "TYS.trt.555",
          brand: "Company 3",
          price: 1010,
          description:
            "Officia amet do quis occaecat sint ipsum magna sit id voluptate officia laboris. Aute qui dolore ullamco fugiat enim excepteur sit Lorem commodo elit non. Voluptate quis aliquip tempor occaecat Lorem culpa aliqua dolor labore excepteur sit pariatur. Reprehenderit nulla ullamco commodo in cillum incididunt magna voluptate consequat exercitation incididunt tempor. Elit occaecat aliqua dolor reprehenderit. Qui aute sunt quis laboris. Voluptate est amet minim labore pariatur officia.",
          color: "red",
          id: 112,
          special: false,
        },
      ],
    };
  },
  components: {
    SectionHeader,
    ComparedProduct,
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 2rem 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>
