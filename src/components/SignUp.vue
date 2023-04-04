<template>
  <!-- <div class="container"> -->
  <div class="row justify-content-center mt-5">
    <div class="col-lg-6 col-md-8 col-sm-12 mx-auto my-auto">
      <div class="card border border-danger w-75 m-auto">
        <div class="card-header">{{ formTitle }}</div>
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" v-model.trim="name" />
              <span v-if="nameError" class="invalid-feedback">{{ nameError }}</span>
            </div>
            <div class="form-group">
              <label for="email">Email :</label>
              <input type="email" class="form-control" id="email" v-model.trim="email" />
              <span v-if="emailError" class="invalid-feedback">{{ emailError }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password" v-model.trim="password" />
              <span v-if="passwordError" class="invalid-feedback">{{ passwordError }}</span>
            </div>
            <div class="form-group">
              <label for="password_confirmation">Confirm Password:</label>
              <input
                type="password"
                class="form-control"
                id="password_confirmation"
                v-model.trim="password_confirmation"
              />
              <span
                v-if="passwordConfirmationError"
                class="invalid-feedback"
              >{{ passwordConfirmationError }}</span>
            </div>
            <button
              type="submit"
              class="btn btn-primary w-75 m-auto"
              :class="{'btn-loading': isLoading}"
            >{{ buttonTitle }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
import { toRaw, isProxy } from "vue";

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
      passwordConfirmationError: "",
      formType: "register",
      isLoading: false
    };
  },
  computed: {
    formTitle() {
      return this.formType === "register" ? "Register" : "Login";
    },
    buttonTitle() {
      return this.isLoading
        ? "Loading..."
        : this.formType === "register"
        ? "Register"
        : "Login";
    }
  },
  methods: {
    // validateForm() {
    //   let isValid = true;
    //   if (!this.name) {
    //     this.nameError = "Name is required";
    //     isValid = false;
    //   }
    //   if (!this.email) {
    //     this.emailError = "Email is required";
    //     isValid = false;
    //   }
    //   if (!this.password) {
    //     this.passwordError = "Password is required";
    //     isValid = false;
    //   } else if (this.password.length < 8) {
    //     this.passwordError = "Password must be at least 8 characters long";
    //     isValid = false;
    //   }
    //   if (!this.password_confirmation) {
    //     this.passwordConfirmationError = "Password confirmation is required";
    //     isValid = false;
    //   } else if (this.password_confirmation !== this.password) {
    //     this.passwordConfirmationError = "Passwords do not match";
    //     isValid = false;
    //   }
    //   return isValid;
    // },
    register() {
      this.isLoading = true;

      this.data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      // console.log(toRaw(this.data));
      axios
        .post("http://127.0.0.1:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        .then(response => {
          this.$router.push("/Home");
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

<style scoped>
.card-body {
  /* margin-top: 3rem; */
  max-height: 400px;
  overflow-y: auto;
}
</style>>