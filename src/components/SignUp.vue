<template>
  <form>
    <div class="login">
      <label><b>Welcome to PostIt</b></label>
      <a href="/">Create an account</a>
      <label>or</label>
      <label>Please log in</label>
      <textarea
        name="femail"
        id="login_email"
        placeholder="Email"
        required
      ></textarea>
      <textarea
        name="fpassword"
        id="login_password"
        placeholder="Password"
        required
      ></textarea>
      <p v-bind:key="error" v-for="error in this.errors">{{ error }}</p>
      <input
        type="submit"
        class="submit_button"
        value="Login"
        @click.prevent="validatePassword"
      />
      <a href="/">Forget password</a>
    </div>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      password: "",
      errors: [],
    };
  },
  methods: {
    validatePassword() {
      const password = this.password;
      this.errors = [];
      if (password.length < 8 || password.length > 15) {
        this.errors.push(
          "The password should be of a specific length (at least 8 characters and less than 15 characters)."
        );
      }
      if (!password.match(/[A-Z]/) || password.match(/[A-Z]/).length < 1) {
        this.errors.push(
          "\nPassword should include at least one uppercase alphabet character."
        );
      }
      if (!password.match(/[a-z]/) || password.match(/[a-z]/)?.length < 2) {
        this.errors.push(
          "Password should include at least two lowercase alphabet characters."
        );
      }
      if (!password.match(/\d/) || password.match(/\d/).length < 1) {
        this.errors.push("Password should include at least one numeric value.");
      }
      if (!password.match(/^[A-Z]/) || password.match(/^[A-Z]/).length < 1) {
        this.errors.push("Password should start with an uppercase alphabet.");
      }
      if (!password.match(/_/) || password.match(/_/).length < 1) {
        this.errors.push('Password should include the character "_".');
      }
    },
  },
};
</script>
