<template>
  <form>
    <div class="signup">
      <div class="input_area">
        <span>Email</span>
        <textarea
          class="text_area"
          name="femail"
          id="login_email"
          placeholder="Email"
          required
        />
      </div>
      <div class="input_area">
        <span>Password</span>
        <textarea
          :value="password"
          @input="(event) => (password = event.target.value)"
          class="text_area"
          name="fpassword"
          id="login_password"
          placeholder="Password"
          required
        />
      </div>
      <p class="error_message" v-bind:key="error" v-for="error in this.errors">
        {{ error }}
      </p>
      <input
        type="submit"
        class="submit_button"
        value="Signup"
        @click.prevent="validatePassword"
      />
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
      if ((password.match(/[a-z]/g)?.length ?? 0) < 2) {
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
      if (this.errors.length > 0) {
        this.errors = ["Password is invalid", ...this.errors];
      }
    },
  },
};
</script>

<style>
.signup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: darkseagreen;
  border-radius: 12px;
  max-width: 300px;
  padding: 4px;
  margin: 0 auto;
}

.submit_button {
  background-color: cornflowerblue;
  border-radius: 12px;
  border: none;
  padding: 6px 12px;
  font-size: 16px;
  margin: 5px;
}

.error_message {
  color: darkred;
  margin: 5px;
}

.text_area {
  background-color: ghostwhite;
  border: none;
  border-radius: 12px;
  text-align: center;
  margin: 5px;
  padding: 10px 0;
  resize: none;
  height: 36px;
}

.input_area {
  flex-direction: row;
  vertical-align: middle;
  margin-left: auto;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>
