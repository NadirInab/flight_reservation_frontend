<template>
  <header class="container bg-white">
    <div class="container1 bg-white p-4">
      <h1 class="p-2 m-4">Make your Tours Amazing with us </h1>
      <Slider />
    </div>
        
    <!-- <h2 class="">Availabale Destinations : </h2>
    <div class="container bg-white">
      <Card
        v-for="(flight, index) in this.flights"
        :key="index"
        :title="flight.to_city"
        :price="flight.price"
        :imageUrl="flight.to_image"
      />
    </div> -->
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex" ;
import Slider from "./Slider.vue";
import Card from "./Card.vue";
export default {
  components: {
    Card,
    Slider
  }, 
  computed:{
    ...mapState(["flights"]) , 
  }, 
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
.container h1 {
  margin: 10px 10px;
}
h3 {
  margin: 20px 30px;
}
h1 {
  text-transform: uppercase;
  font-weight: 900;
  border-left: 15px solid #062381;
  padding-left: 10px;
}
h2 {
  text-transform: uppercase;
  font-weight: 900;
  border-left: 15px solid #02843c;
  padding-left: 10px;
}
.card {
  width: 20rem;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
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
.seconde {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin: 8px 0;
}
.seconde img {
  width: 300px;
  height: 200px;
  border-radius: 8px;
}
img:hover {
  opacity: 0.8;
}
@media only screen and (max-width: 830px) {
  .container {
    border : 2px solid red;
    justify-content: center;
  }
}
</style>