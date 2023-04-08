<template>
  <header>
    <h3>Popular Destinations :</h3>
    <div class="container">
      <div class="first">
        <Popular v-for="(image, index) in images" :key="index" :image-src="image.src" />
      </div>
      <div class="seconde">
        <Popular v-for="(image, index) in images" :key="index" :image-src="image.src" />
      </div>
    </div>
    <h3>Popular Destinations :</h3>
    <div class="container">
      <Card
        v-for="(image, index) in images"
        :key="index"
        :title="image.title"
        :price="index"
        :imageUrl="image.src"
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

.first {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:5px ;
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
</style>