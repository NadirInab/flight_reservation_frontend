<template>
  <div class="hero">
    <!-- <div class="hero-overlay"></div> -->
    <div class="hero-content">
      <h1 class="hero-title">Fly with us</h1>
      <p class="hero-subtitle">Book your next flight today</p>
      <button @click="scrollDown" class="hero-button">Book Now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "airplane"
    };
  },
  methods: {
    scrollDown() {
      window.scrollBy(0, 300);
    }
  },
  components: {}
};
</script>

<style scoped>
.hero {
  width: 100%;
  background-image: url("../assets/images/theflight.jpg");
  position: relative;
  height: 100vh;
  padding-top: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
h1 {
  text-transform: uppercase;
  font-weight: 900;
  border-left: 15px solid #fec500;
  padding-left: 10px;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.hero-title {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
}

.hero-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
    rgba(241, 183, 75, 0.661) 0px 6px 6px;
}
.hero-button:hover {
  background-color: #0056b3;
}
@media only screen and (max-width: 830px) {
  .hero {
    height: 50vh;
    background-image: url("../assets/images/theflight.jpg");
    overflow: hidden;
    width: 100vw;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border: 3px solid lightcoral;
  }
  .hero-content {
    padding: 30px;
  }
  .hero-content h1 {
    font-size: 36px;
    margin-bottom: 15px;
  }
  .hero-content p {
    font-size: 18px;
    margin-bottom: 20px;
  }
}
</style>
