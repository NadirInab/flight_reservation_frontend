<template>
  <div class="container">
    <h2>Sign Up</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("auth_token", response.data.token);
          // redirect to the home page or dashboard
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style>
</style>