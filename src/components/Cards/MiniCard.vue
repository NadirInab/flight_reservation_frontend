<template>
  <div class="container p-0 mt-4 parent">
    <img src="../../assets/images/sahara.jpeg" alt srcset />
    <div class="child">
      <h3>Your Next Trip start here :</h3>
      <b class="d-block">Escape for a while</b>
      <br />
      <small>Enjoy the freedom of a monthly stay on Booking.com</small>
    </div>
    <img
      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/a0/caption.jpg?w=1000&h=-1&s=1"
      alt
      srcset
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  justify-content: space-evenly;
  font-style: italic;
  background-color: antiquewhite;
}
.child {
  margin-top: 2rem;
  /* background-color: antiquewhite; */
}
.child b,
small {
  text-align: start;
}
.parent img {
  width: 100%;
  height: 200px;
}

@media only screen and (max-width: 830px) {
  .parent {
    display: none;
  }
}
</style>