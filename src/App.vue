<template>
  <header>
    <Navbar />
  </header>
</template>

<script >
import Navbar from "./components/Navbar.vue";
export default {
  data() {
    return {
      test: "tes", 
      cities : [1, 2, 3, ]
    };
  },
  components: {
    Navbar,
  }
};
</script>

<style >

.container {
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  background-color: #f2f2f2;

}
.card {
  width: 20rem;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); */
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
