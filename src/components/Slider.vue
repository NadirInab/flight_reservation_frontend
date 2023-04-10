<template>
  <section class="container1">
    <div class="image-container">
      <img src="../assets/images/Marra.jpg" alt="Image 1" />
      <img src="../assets/images/roma.jpg" alt="Image 2" />
    </div>
    <div class="container bg-white image-container2">
      <img src="../assets/images/Agadir.jpg" alt="Image 1" />
      <img src="../assets/images/sahara.jpeg" alt="Image 2" />
      <img src="../assets/images/Tanger.jpg" alt="Image 2" />
      <img src="../assets/images/Agadir.jpg" alt="Image 1" />
      <img src="../assets/images/sahara.jpeg" alt="Image 2" />
      <img src="../assets/images/Tanger.jpg" alt="Image 2" />
    </div>
  </section>
</template>

<script>
// import tes from "../assets/images"
export default {};
</script>

<style scoped>
.container1 {
  background-color: white;
}
.image-container {
  display: flex;
  justify-content: space-around;
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

.image-container:hover, .image-container2 img:hover {
  opacity: 0.8;
}
</style>