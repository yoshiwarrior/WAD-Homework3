<template>
  <div class="post">
    <div>
      <img src="@/assets/user-avatar.png" width="32" height="32" /><span>{{
        author
      }}</span
      ><span>{{ createdAt.toLocaleDateString() }}</span>
    </div>
    <img v-if="imageUrl" :src="imageUrl" />
    <p v-if="content">{{ content }}</p>
    <img
      src="@/assets/facebook-like.png"
      width="32"
      height="32"
      @click="IncreaseLike"
    />
    <span>{{ likes }}</span>
  </div>
</template>

<script>
export default {
  name: "PostElement",
  props: {
    author: String,
    content: String,
    imageUrl: {
      type: String,
      required: false,
    },
    createdAt: Date,
    likes: Number,
    index: Number,
  },
  methods: {
    IncreaseLike: function () {
      this.$store.dispatch("addLike", this.$props.index);
    },
  },
};
</script>
