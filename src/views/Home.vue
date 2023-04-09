<template>
  <header>
    <Hero />
    <Reservations />
    <div v-show="showTicket">
      <Ticket />
    </div>
    <section class="popular p-4">
      <h3>Popular Destinations :</h3>
      <div class="first">
        <Popular v-for="(image, index) in images" :key="index" :image-src="image.src"  :cityName="image.title"/>
      </div>
    </section>
  </header>
</template>

<script>
import rabat from "../assets/images/rabat.jpg";
import Agadir from "../assets/images/Agadir.jpg";
import Tanger from "../assets/images/Tanger.jpg";
import Roma from "../assets/images/roma.jpg";

import Hero from "../components/Hero.vue";
import Ticket from "../components/Ticket.vue";
import Reservations from "../components/Reservations.vue";
import Popular from "../components/Popular.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      images: [
        {
          title: "rabat",
          src: rabat
        },
        {
          title: "Tanger",
          src: Tanger
        },
        {
          title: "Agadir",
          src: Agadir
        },
        {
          title: "rabat",
          src: Roma
        },
        {
          title: "Tanger",
          src: Tanger
        },
        {
          title: "Agadir",
          src: Agadir
        },
        {
          title: "rabat",
          src: rabat
        },
        {
          title: "Tanger",
          src: Tanger
        },
        {
          title: "Agadir",
          src: Agadir
        }
      ]
    };
  },
  components: {
    Hero,
    Reservations,
    Ticket,
    Popular
  },
  computed: {
    ...mapGetters(["showTicket"])
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