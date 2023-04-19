<template>
  <section class="container bg-white">
    <div class="container bg-white">
      <div class="image-container">
        <img v-for="(flight, index ) in getFlightImage" :key="index" :src="flight" alt="Image 1" />
      </div>

      <div class="container bg-white image-container2">
        <img v-for="(flight, index ) in getFlightImage" :key="index" :src="flight" alt="Image 1" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFlightImage"]),
    filteredItems() {
      return this.getFlightImage;
    },
    getRandomElement() {
      const randomIndex = Math.floor(
        Math.random() * this.getFlightImage.length
      );
      console.log(randomIndex);
      return this.getFlightImage[randomIndex];
    }
  }
};
</script>

<style scoped>
.container1 {
  background-color: white;
}
.image-container {
  display: flex;
}

.image-container img {
  width: 20%;
  height: auto;
  object-fit: cover;
  margin: 0 5px;
  border-radius: 10px;
}
.image-container2 img {
  width: 32%;
  height: auto;
  object-fit: cover;
  margin: 20px 5px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.image-container2 img:hover {
  width: 30%;
  height: auto;
  object-fit: cover;
  margin: 20px 5px;
  border-radius: 10px;
  transform: scale(1.05);
}

.image-container img:hover {
  opacity: 0.8;
}
</style>