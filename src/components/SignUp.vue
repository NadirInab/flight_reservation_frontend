<template>
  <div class="signup row justify-content-center">
    <div class="h3">
      <h3>Sign Up</h3>
    </div>
    <form @submit.prevent="register">
      <div>
        <div>
          <label for="name">
            <i class="fa-sharp fa-solid fa-user"></i> Full Name :
          </label>
          <input type="text" class id="name" placeholder="John Doe" v-model.trim="name" />
          <span v-if="nameError" class="invalid-feedback">{{ nameError }}</span>
        </div>

        <div>
          <label for="password">
            <i class="fa-solid fa-lock mx-1"></i> Password :
          </label>
          <input
            type="password"
            class
            id="password"
            placeholder="**********"
            v-model.trim="password"
          />
          <span v-if="passwordError" class="invalid-feedback">{{ passwordError }}</span>
        </div>
      </div>
      <div>
        <div>
          <label for="email">
            <i class="fa-solid fa-envelope mx-1"></i> Email :
          </label>
          <input type="email" class id="email" placeholder="JohnDoe@gmail.com" v-model.trim="email" />
          <span v-if="emailError" class="invalid-feedback">{{ emailError }}</span>
        </div>

        <div>
          <label for="password_confirmation">
            <i class="fa-solid fa-lock mx-1"></i> Confirm Password :
          </label>
          <input
            type="password"
            id="password_confirmation"
            placeholder="**********"
            v-model.trim="password_confirmation"
          />
          <span
            v-if="passwordConfirmationError"
            class="invalid-feedback"
          >{{ passwordConfirmationError }}</span>
        </div>
      </div>
      <button type="submit" class="btn btn-primary w-50">Register</button>
      <span class="text-muted">
        Already Have an account
        <span @click="handleClick" class="text-primary">Sign In</span>
      </span>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      data: {},
      nameError: "",
      emailError: "",
      passwordError: "",
      passwordConfirmationError: ""
    };
  },
  computed: {},
  methods: {
    handleClick() {
      this.$store.commit("showSignUp");
    },

    validateForm() {
      let isValid = true;
      if (!this.name) {
        this.nameError = "Name is required";
        isValid = false;
      }
      if (!this.email) {
        this.emailError = "Email is required";
        isValid = false;
      }
      if (!this.password) {
        this.passwordError = "Password is required";
        isValid = false;
      } else if (this.password.length < 8) {
        this.passwordError = "Password must be at least 8 characters long";
        isValid = false;
      }
      if (!this.password_confirmation) {
        this.passwordConfirmationError = "Password confirmation is required";
        isValid = false;
      } else if (this.password_confirmation !== this.password) {
        this.passwordConfirmationError = "Passwords do not match";
        isValid = false;
      }
      return isValid;
    },

    register() {
      this.isLoading = true;
      this.data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      axios
        .post("http://127.0.0.1:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(response => {
          console.log(response);
          this.$router.push("/");
          localStorage.setItem("auth_token", response.data.token);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>

<style scoped>
.card {
  background-color: transparent;
}
.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.h3 {
  /* border: 2px solid red; */
  margin-bottom: -15px;
  z-index: 23;
}
.h3 h3 {
  /* border: 2px solid red; */
  text-align: center;
  width: 20%;
  height: 60px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px;
  top: -10px;
  right: -10px;
  background-color: white;
  color: darkblue;
}
button {
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
}

form {
  margin: 0 auto;
  padding: 60px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  animation: fadein 1s ease-out;

  width: 50% !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-gap: 20px;
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
span {
  cursor: pointer;
  text-decoration: underline;
}
</style>>