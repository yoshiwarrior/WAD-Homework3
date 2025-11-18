<template>
  <main>
    <button @click="ResetLikes">reset likes</button>
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
