<template>
  <header>
    <Hero />
    <Reservations />
    <div v-show="showTicket">
      <Ticket />
    </div>
    <section class="popular p-4">
      <div class="container first bg-white">
        <Popular
          v-for="(flight, index) in this.flights"
          :key="index"
          :image="flight.to_image"
          :cityName="flight.to_city"
        />
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
    return {};
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
    ...mapState(["flights"])
  },
  mounted() {
    // console.log(this.flights[0]);
    let user = JSON.parse(localStorage.getItem("user"));
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
@media only screen and (max-width: 830px) {
  .popular{
    width: 100vw;
  }
  .first {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
}
</style>