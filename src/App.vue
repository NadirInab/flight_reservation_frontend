<template>
  <header>
    <Navbar v-if="!isAdmin" />
    <router-view />
    <Footer v-if="!isAdmin" />
  </header>
</template>

<script >
import { mapGetters, mapState, mapMutations } from "vuex";
import Navbar from "./components/Home/Navbar.vue";
import Footer from "./components/Home/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters(["isAdmin"])
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("user"));
    if (!data) return;
    if(data.roles.length === 0 ) return;
    this.setAdmin(data.roles[0].name === "admin");
    // console.log("here data name app : ",data) ;
  },
  methods: {
    ...mapMutations(["setAdmin"])
  }
};
</script>

<style >
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  background-color: #f2f2f2;
}
.card {
  width: 20rem;
  height: 400px;
  margin: 20px;
  border-radius: 10px;
  background-color: #f2f2f2;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
</style>
