<template>
  <header>
    <Hero />
  <Reservations />
  </header>
</template>

<script>
import Hero from "../components/Hero.vue" ;
import Reservations from "../components/Reservations.vue" ;
export default {
  data(){
    return {

    }
  }, 
  components : {
    Hero, 
    Reservations
  }
}
</script>

<style scoped>

</style>