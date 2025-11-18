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
    <div>
      <img
        src="@/assets/facebook-like.png"
        width="32"
        height="32"
        @click="IncreaseLike"
      />
      <span>{{ likes }} {{ likes === 1 ? "like" : "likes" }}</span>
    </div>
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

<style>
p {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
}

.post {
  border-radius: 12px;
  background-color: #d8d8d8;
  padding: 4px;
  margin: 12px 0;
}

.post > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.post > img:not(:nth-last-child(1)) {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
}
</style>
