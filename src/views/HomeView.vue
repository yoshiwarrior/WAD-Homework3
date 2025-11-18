<template>
  <main>
    <PostElement
      v-for="(product, index) in GetPosts()"
      v-bind:key="index"
      :author="product.author"
      :created-at="new Date(product.createdAt)"
      :image-url="product.imageUrl"
      :content="product.content"
      :likes="product.likes"
      :index="index"
    />
  </main>
  <button @click="ResetLikes">reset likes</button>
</template>

<script>
import PostElement from "../components/PostElement.vue";

export default {
  name: "HomeView",
  components: {
    PostElement,
  },
  methods: {
    GetPosts: function () {
      return this.$store.getters.getProductList;
    },
    ResetLikes: function () {
      this.$store.dispatch("resetLikes");
    },
  },
};
</script>

<style>
main {
  max-width: 400px;
  margin: 0 auto;
}

button {
  background-color: cornflowerblue;
  border-radius: 12px;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  margin: 5px;
}
</style>
