<template>
  <div class="signIn pt-5">
    <form @submit.prevent="login">
      <div
        v-if="this.$store.state.signUpInErr"
        class="alert alert-danger"
      >{{ this.$store.state.signUpInErr }}</div>
      <div>
        <label>
          <i class="fa-solid fa-envelope mx-1"></i> Email:
        </label>
        <input type="email" v-model="email" placeholder="JohnDoe@gmail.com" required />
      </div>
      <div>
        <label>
          <i class="fa-solid fa-lock mx-1"></i> Password:
        </label>
        <input type="password" v-model="password" placeholder="************" required />
      </div>
      <button :disabled="!email && !password" class="w-50" type="submit">Login</button>
      <span class="text-muted">
        Don't Have an account ?
        <span @click="handleClick" class="goSignUp text-primary">Sign Up</span>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      data: {}
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("showSignUp");
    },

    login() {
      this.data = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("SignIn", this.data);
      
    }
  }
};
</script>

<style scoped>
.signIn {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  padding-top: 0px;
  overflow: hidden;
  background-image: url("../assets/images/theflight.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.goSignUp {
  cursor: pointer;
}

form {
  max-width: 40%;
  /* width: 100%; */
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: fadein 1s ease-out;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: initial;
}
input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
}
input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}
input[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>