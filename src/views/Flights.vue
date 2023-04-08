<template>
  <section>
    <div class="hero"></div>
    <FlightData />
    <FlightForm />
  </section>
</template>

<script>
import FlightData from "../components/FlightData.vue";
import FlightForm from "../components/admin/FlightForm.vue";

export default {
  data() {
    return {
      display: true
    };
  },
  components: {
    FlightData,
    FlightForm,
  }
};
</script>

<style>
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
section {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 1px;
}
.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
button {
  display: inline-block;
  padding: 12px 24px;

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: #4caf50;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #3e8e41;
}
</style>