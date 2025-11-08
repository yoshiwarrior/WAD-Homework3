<template>
  <div class="about">
    <h1>This is the signup page</h1>
    <SignUp />
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";

export default {
  name: "SignupView",
  components: {
    SignUp,
  },
};
</script>
