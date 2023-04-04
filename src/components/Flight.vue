<template>
  <header>
    <!-- <h1>Flights</h1> -->
    <div>
      <!-- <ul  :v-for="datum in data">
        <li>
          {{datum.flight_name}},
          <b>{{datum.date}}</b> To
          <i>{{datum.to}}</i>
          <i>{{datum.from}}</i>
        </li>
      </ul> -->
    </div>
  </header>
</template>

<script>
import axios from "axios";
import { toRaw, isProxy } from "vue";
export default {
  data() {
    return {
      name: "airline",
      data: []
    };
  },
  methods: {
    handleChange() {
      this.name = "Nadir api";
    }
  },
  // async created() {
  //   try {
  //     await axios.get("http://127.0.0.1:8000/api/flights")
  //     .then(res =>{
  //       this.data = res.data[0] ;
  //       if(isProxy(this.data)){
  //         this.data = toRaw(this.data) ;
  //       }
  //       console.log(this.data) ;
  //     } )
  //   } catch (e) {
  //     console.log("err " + e);
  //   }
  // },
  // mounted() {
  //   console.log(this.data);
  // }
};
</script>

<style>
</style>