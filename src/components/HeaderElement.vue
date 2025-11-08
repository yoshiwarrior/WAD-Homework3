<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    <div>
      <img src="assets/img/user-avatar.png" width="48px" height="48px" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderElement",
  props: {},
};
</script>
