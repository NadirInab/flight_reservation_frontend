<template>
  <section>
    <div v-if="!isAdmin" class="hero">
      <h1>
        Life is Short and the world is wide
        <i class="fa-sharp fa-solid fa-earth-americas fa-bounce"></i> ! <br>
        <small>Choose Your Destination</small>
      </h1>
    </div>
    <FlightData />
    <FlightForm />
  </section>
</template>

<script>
import FlightData from "../components/admin/FlightData.vue";
import FlightForm from "../components/admin/FlightForm.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      display: true
    };
  },
  components: {
    FlightData,
    FlightForm
  },
  computed: {
    ...mapGetters(["isAdmin"])
  },
  // mounted(){
  //   let data = JSON.parse(localStorage.getItem("user"));
  //   if(!data) return ;
  //   if(data) return ;
  // this.setAdmin(data.roles[0].name === 'admin') ;
  // },
  methods: {
    ...mapMutations(["setAdmin"])
  }
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

.hero h1 {
  color: rgb(44 27 27);
  width: 60rem;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-20%, -50%);
  z-index: 1;
  font-size: 3.5rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  border-left: 15px solid #b2f009ae;
  border-bottom: 15px solid #0426bdc6;
  padding-left: 10px;
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