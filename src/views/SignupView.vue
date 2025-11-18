<template>
  <div class="about">
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

<style>
.about {
  min-height: calc(100vh - 192px);
}
</style>
