<template>
  <header>
    <Hero />
    <Reservations />
    <div  v-show="showTicket">
      <Ticket />
    </div>
  </header>
</template>

<script>
import Hero from "../components/Hero.vue";
import Ticket from "../components/Ticket.vue";
import Reservations from "../components/Reservations.vue";
import {mapGetters} from "vuex" ;
export default {
  data() {
    return {};
  },
  components: {
    Hero,
    Reservations,
    Ticket
  }, 
  computed : {
    ...mapGetters(["showTicket"])

  }
};
</script>

<style scoped>
</style>