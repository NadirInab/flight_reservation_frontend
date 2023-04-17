<template>
  <main>
    <div v-if="showSignUp">
      <SignUp />
    </div>
    <div v-else>
      <SignIn />
    </div>
  </main>
</template>

<script>
import SignUp from "../components/passenger/SignUp.vue";
import SignIn from "../components/passenger/SignIn.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      // show : true
    };
  },
  components: {
    SignUp,
    SignIn
  },
  computed: {
    ...mapGetters(["showSignUp"])
  },
  methods: {
  }
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/images/theflight.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>