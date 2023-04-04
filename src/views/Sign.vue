<template>
  <main>
    <div v-if="show">
      <SignUp />
    </div>
    <div v-else>
      <SignIn />
    </div>
  </main>
</template>

<script>
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    SignUp,
    SignIn
  }
};
</script>

<style scoped>
/* .container {
    border: 2px dashed lightgreen;
    margin-top: 5rem;
    background-color: darkcyan;
  
} */

main {
  width: 100vw;
}
</style>