<template>
  <header>
    <div class="hero">
      <img
        style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;width:100%;height:100vh"
        src="https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1597920829/web/hero_images/ma_1.jpg"
        width="100%"
        height="140"
      />
      <div class="child">
        <h1>Explore the world with us!</h1>
        <small>
          Save at least 15% of your time
          <b class="text-success">Booking</b> From Home .
        </small>
      </div>
    </div>
    <Cards />
  </header>
</template>

<script>
import Cards from "../components/Cards.vue";
import Hero from "../components/Hero.vue";

export default {
  data() {
    return {};
  },
  components: {
    Cards,
    Hero
  }
};
</script>

<style scoped>
.hero {
  width: 100%;
  /* background-image: url("https://assets.wego.com/image/upload/c_fill,fl_los…_auto,w_2560/v1597920829/web/hero_images/ma_1.jpg"); */
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
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
}
.child h1 {
  font-size: 3rem;
}
.child small {
  font-size: 1rem;
}
</style>