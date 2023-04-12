<template>
  <h1>Passengers Tickets : </h1>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex"
export default {
  data(){
    return {

    }
  }, 
  computed : {
    // ...mapActions(["getTickets"]) 
  }, 
  mounted(){
    this.$store.dispatch("getTickets") ;
   }
}
</script>

<style>

</style>