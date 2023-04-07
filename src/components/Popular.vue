<template>
  <div>
    <div class="first">
      <img :src="imageSrc" alt="Card image" />
      <img :src="imageSrc" alt="Card image" />
    </div>
    <div class="seconde">
      <img :src="imageSrc" alt="Card image" />
      <img :src="imageSrc" alt="Card image" />
      <img :src="imageSrc" alt="Card image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    imageSrc: String
  }
};
</script>

<style>
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
</style>