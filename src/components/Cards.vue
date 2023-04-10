<template>
  <header class="container bg-white">
    <div class="container1 bg-white">
      <h1>Make your Tours Amazing with us !!</h1>
      <Slider />
    </div>
    <!--     
    <div class="container bg-white">
      <Card
        v-for="(image, index) in images"
        :key="index"
        :title="image.title"
        :price="index"
        :imageUrl="image.src"
      />
    </div>-->
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex" ;
import rabat from "../assets/images/rabat.jpg";
import Agadir from "../assets/images/Agadir.jpg";
import Tanger from "../assets/images/Tanger.jpg";
import Slider from "./Slider.vue";
import Card from "./Card.vue";
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
        }
      ]
    };
  },
  components: {
    Card,
    Slider
  }, 
  computed:{
    ...mapGetters(["getFlightImage"])
  }, 
  mounted(){
    console.log(this.getFlightImage) ;
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
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
</style>