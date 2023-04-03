<template>
  <div class="hero">
    <!-- <video autoplay muted loop class="hero-video">
      <source src="/path/to/video.mp4" type="video/mp4">
    </video>-->
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">Fly with us</h1>
      <p class="hero-subtitle">Book your next flight today</p>
      <button class="hero-button">Book Now</button>
    </div>
  </div>
</template>

<script>
// import airplane from '/assets/images/myairplane.avif' ;
// import airplane from "../assets/images/myairplane.avif" ;
export default {
  data() {
    return {
      image: "airplane"
    };
  }
};
</script>

<style>
.hero {
  width: 100%;
  /* border: 2px solid red; */
  background-image: url("../assets/images/myairplane.avif");
  position: relative;
  height: 100vh;
  padding-top: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
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
}

.hero-button:hover {
  background-color: #0056b3;
}
</style>
