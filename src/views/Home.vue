<template>
  <header>
    <Hero />
    <Reservations />
    <div v-show="showTicket">
      <Ticket />
    </div>
    <section class="popular p-4">
      <h3>Popular Destinations :</h3>
      <div class="container first">
        <Popular v-for="(image, index) in this.getFlightImage" :key="index" :image="image"  />
        <!-- :cityName="image.title" -->
      </div>
      <h1>Heelo</h1>
      <img :src="this.getFlightImage[this.getFlightImage.length -1]" alt="image">
      <MiniCard />
    </section>
  </header>
</template>

<script>
import rabat from "../assets/images/rabat.jpg";
import Agadir from "../assets/images/Agadir.jpg";
import Tanger from "../assets/images/Tanger.jpg";
import Roma from "../assets/images/roma.jpg";

import MiniCard from "../components/MiniCard.vue";
import Hero from "../components/Hero.vue";
import Ticket from "../components/Ticket.vue";
import Reservations from "../components/Reservations.vue";
import Popular from "../components/Popular.vue";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
     images : []
    };
  },
  components: {
    Hero,
    Reservations,
    Ticket,
    Popular, 
    MiniCard
  },
  computed: {
    ...mapGetters(["showTicket", "getFlightImage"]), 
  }, 
  mounted() {
    // console.log(this.getFlightImage[this.getFlightImage.length -1]) ;
    this.getFlightImage ;
  }
};
</script>

<style scoped>
.popular {
  margin-top: 50px;
  background-color: white;
}
.first {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}
.first img {
  width: 400px;
  height: 250px;
  border-radius: 8px;
}
</style>