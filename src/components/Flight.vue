<template>
  <header>
    <h1>Flights</h1>
    <div>
      <ul :key="datum.id" :v-for="data in datum">
        <li>
          {{datum.date}},
          <b>{{datum.from}}</b> To
          <i>{{datum.to}}</i>
        </li>
      </ul>
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
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/flights");
      this.data = res.data;
      console.log(toRaw(this.data));
    } catch (e) {
      console.log("err " + e);
    }
  },
  mounted() {}
};
</script>

<style>
</style>