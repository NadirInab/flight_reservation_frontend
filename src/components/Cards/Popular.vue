<template>
  <div class="image-container">
    <img :src="getImageUrl" alt="your-image-alt" />
    <h2 class="image-title">{{cityName}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    image: String,
    cityName: String
  },
  computed: {
    getImageUrl() {
      return `http://localhost:8000/images/${this.image}`;
    }
  }
};
</script>

<style scoped>
.first {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
.image-container {
  position: relative;
  margin: 20px 0px;
}
.image-container {
  transition: transform 0.3s ease-in-out;
}
.image-container:hover,
.image-container img {
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.image-title {
  position: absolute;
  top: -20px;
  left: 70%;
  transform: translateX(-50%);
  padding: 10px;
  background-color: rgba(1, 27, 93, 0.984);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>