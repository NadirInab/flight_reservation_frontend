<template>
  <header>
    <Hero />
    <Reservations />
    <div v-show="showTicket">
      <Ticket />
    </div>
    <section class="popular p-4">
      <h3>Popular Destinations :</h3>
      <div class="container first bg-white">
        <Popular v-for="(image, index) in this.getFlightImage[0]" :key="index" :image="image"  />
        <!-- :cityName="image.title" :cityName="this.getFlightImage[1]" -->
      </div>
      <MiniCard />
    </section>
  </header>
</template>

<script>
import MiniCard from "../components/MiniCard.vue";
import Hero from "../components/Hero.vue";
import Ticket from "../components/Ticket.vue";
import Reservations from "../components/Reservations.vue";
import Popular from "../components/Popular.vue";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
     images : [], 
     titles : []
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
    this.images = this.getFlightImage[0] ;
    this.titles = this.getFlightImage[1] ;
    let user = JSON.parse(localStorage.getItem('user')) ;
    // console.log(user) ;
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