<template>
  <header>
    <div class="container">
      <Card
        v-for="index in 5"
        :key="index"
        title="Rabat"
        :price="index"
        imageUrl="../assets/images/rabat.jpg"
      />
    </div>
  </header>
</template>

<script>
import axios from "axios" ;
import Card from "./Card.vue";
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    price: String,
    imageUrl: String
  },
  components: {
    Card
  },
  async created() {
    axios("http://127.0.0.1:8000/api/flights").then(res => {
      console.log(res);
    });
  }
};
</script>

<style scoped>
.container {
  /* border: 2px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  background-color: #f2f2f2;
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