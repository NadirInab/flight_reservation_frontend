<template>
  <header>
    <h3>Popular Destinations :</h3>
    <div class="container">
      <Popular v-for="(image, index) in images" :key="index" :image-src="image.src" />
    </div>
    <h3>Popular Destinations :</h3>
    <div class="container">
      <Card
        v-for="index in 9"
        :key="index"
        title="Rabat"
        :price="index"
        imageUrl="../assets/images/roma.jpg"
      />
    </div>
  </header>
</template>

<script>
import rabat from "../assets/images/rabat.jpg";
import Agadir from "../assets/images/Agadir.jpg";
import Tanger from "../assets/images/Tanger.jpg";
import Popular from "./Popular.vue";
import Card from "./Card.vue";
export default {
  data() {
    return {
      images: [
        {
          src: rabat
        },
        {
          src: Tanger
        },
        {
          src: Agadir
        }
      ]
    };
  },
  components: {
    Card,
    Popular
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
  /* background-color: #f2f2f2; */
}
h3 {
  margin: 20px 30px;
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
</style>