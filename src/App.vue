<template>
  <header>
     <Flight />
  </header>
</template>

<script >
  import Flight from "./components/Flight.vue" ;
  export default {
    data(){
      return {
        test : "tes"
      }
    }, 
    components : {
      Flight
    }
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
