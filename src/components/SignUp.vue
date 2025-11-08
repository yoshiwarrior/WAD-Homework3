<template>
  <form action="index.html">
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
      <input type="submit" class="submit_button" value="Login" />
      <a href="/">Forget password</a>
    </div>
  </form>
</template>
