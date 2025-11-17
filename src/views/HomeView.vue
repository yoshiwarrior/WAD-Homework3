<template>
  <main>
    <PostElement
      author="Basti"
      :created-at="new Date('2025-10-24')"
      image-url="https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/basti.gif?raw=1"
      content="ghg"
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
};
</script>
