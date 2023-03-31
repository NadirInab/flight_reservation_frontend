<template>
  <header>
    <Navbar />
    <Reservations />
    <div class="container">
        <!-- <h3>Popular Destinations :</h3> -->
      <Card  v-for="index in 5" :key="index" title="Rabat" :price="index" imageUrl="../assets/images/rabat.jpg" />
    </div>
  </header>
</template>

<script >
import Reservations from "./components/Reservations.vue";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
// import Hero from "./components/Hero.vue" ;
export default {
  data() {
    return {
      test: "tes", 
      cities : [1, 2, 3, ]
    };
  },
  components: {
    Navbar,
    Card,
    // Loader,
    // Flight,
    // Hero,
    Reservations
  }
};
</script>

<style >

.container {
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}
.card {
  width: 20rem;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
