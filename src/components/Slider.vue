<template>
  <section class="container bg-white">
    <div class="image-container">
      <img v-for="(flight, index ) in filteredItems" :key="index" :src="flight" alt="Image 1" />
    </div>
    <div class="container bg-white image-container2">
      <img v-for="(flight, index ) in getFlightImage" :key="index" :src="flight" alt="Image 1" />
    </div>
  </section>
</template>

<script>
// import tes from "../assets/images"
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getFlightImage"]) ,
    filteredItems() {
      // randomIndex = Math.floor(Math.random() * this.getFlightImage.length);
      return this.getFlightImage;
    }
  },
};
</script>

<style scoped>
.container1 {
  background-color: white;
}
.image-container {
  display: flex;
  /* justify-content: space-between; */
}

.image-container img {
  width: 20%;
  height: auto;
  object-fit: cover;
  margin: 0 5px;
  border-radius: 10px;
}
.image-container2 img {
  width: 30%;
  height: auto;
  object-fit: cover;
  margin: 20px 5px;
  border-radius: 10px;
}

/* .image-container:hover, */
.image-container img:hover {
  opacity: 0.8;
}
</style>