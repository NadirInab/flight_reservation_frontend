<template>
  <header>
    <div class="hero">
      <video
        autoplay
        loop
        id="expert-video"
        muted
        playsinline
        class="absolute top-0 left-0 object-cover h-full w-full z-0"
        poster="https://lonelyplanetstatic.imgix.net/marketing/2023/BIT/images/hero-poster/NewMexico_3.jpg"
      >
        <source
          src="https://lonelyplanetstatic.imgix.net/marketing/2023/BIT/videos/LOOPING%20VIDEOS/MAIN%20PAGE/NewMexico_3.mp4"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>
      <div class="child">
        <h1>Explore the world with us!</h1>
        <small>
          Save at least 15% of your time
          <b class="text-success">Booking</b> From Home .
        </small>
      </div>
    </div>

    <Cards />
    <MiniCard />
  </header>
</template>

<script>
import Cards from "../components/Cards/Cards.vue";
import Hero from "../components/Home/Hero.vue";
import MiniCard from "../components/Cards/MiniCard.vue";

export default {
  data() {
    return {};
  },
  components: {
    Cards,
    Hero,
    MiniCard
  }
};
</script>

<style scoped>
.hero {
  width: 100%;
  position: relative;
  height: 100vh;
  padding-top: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.child {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #ce1010;
}
.child h1 {
  font-size: 4rem;
}
.child small {
  color: rgb(2, 81, 103);
  font-size: 1.5rem;
}
</style>