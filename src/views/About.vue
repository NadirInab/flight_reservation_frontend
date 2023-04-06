<template>
  <header>
    <div class="hero">
      <img
        style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;width:100%;height:100vh"
        src="https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_2560/v1597920829/web/hero_images/ma_1.jpg"
        width="100%"
        height="140"
      />
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
  background-image: url("https://assets.wego.com/image/upload/c_fill,fl_los…_auto,w_2560/v1597920829/web/hero_images/ma_1.jpg");
  position: relative;
  height: 100vh;
  padding-top: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>