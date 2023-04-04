<template>
  <div class="container">
    <SignUp />
  </div>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
export default {
  data() {
    return {};
  },
  components: {
    SignUp,
    SignIn
  }
};
</script>

<style scoped>
.container {
    border: 2px dashed lightgreen;
    margin-top: 5rem;
    background-color: darkcyan;
    /* width: 60vh; */
}
</style>