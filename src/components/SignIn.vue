<template>
  <div class="signIn border border-2 pt-5">
    <h2>Sign In</h2>
    <form @submit.prevent="login">
      <div>
        <label>
          <i class="fa-solid fa-envelope mx-1"></i> Email:
        </label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>
          <i class="fa-solid fa-lock mx-1"></i> Password:
        </label>
        <input type="password" v-model="password" required />
      </div>
      <button class="w-50" type="submit">Login</button>
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
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response.data);
        });
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
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: fadein 1s ease-out;
}

/* Add animation for form fade-in effect */
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
  font-weight: bold;
}
input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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