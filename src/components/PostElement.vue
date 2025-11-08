<template>
  <div class="post">
    <div>
      <img src="assets/img/user-avatar.png" width="32" height="32" /><span
        >Basti</span
      ><span>24/10/2025</span>
    </div>
    <img
      src="https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/basti.gif?raw=1"
    />
    <p>ghg</p>
    <img src="assets/img/facebook-like.png" width="32" height="32" />
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
  },
};
</script>
