<template>
  <div class="card">
    <!-- <transition name="fade"> -->
      <div class="card-content">
        <img class="card-image" src="../assets/images/rabat.jpg" alt="Card image">
        <h2 class="card-title">{{ title }}</h2>
        <p class="card-price">{{ price }}</p>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    price: String,
    imageUrl: String
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  background-color: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}


.card-content {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 16px;
}

.card-image {
  display: block;
  width: 100%;
  height: 80%;
  /* scale the image by a factor of 1.2 */
  transform: scale(1.2);
}

.card-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #222222;
}

.card-price {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #666666;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
