<template>
  <div class="tableContainer">
    <h3>Where do you want to go? <i class="fa-solid fa-earth-americas fa-bounce"></i></h3>
    <table>
      <thead>
        <tr>
          <th>Flight Name</th>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Airport</th>
          <th>Airline</th>
          <th>Price (MAD)</th>
          <th>Number of Seats</th>
          <th>Book it</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flight in flights" :key="flight.id">
          <td class="flight-name">{{ flight.flight_name }}</td>
          <td class="flight-date">{{ flight.date }}</td>
          <td class="from-to">{{ flight.from }}</td>
          <td class="from-to">{{ flight.to }}</td>
          <td class="airport">{{ flight.airport }}</td>
          <td class="airline">{{ flight.airline }}</td>
          <td class="price">
            <b>{{flight.price}}</b>
          </td>
          <td class="seats">{{ flight.number_of_seats }}</td>
          <td class="seats">
            <i class="fa-sharp fa-solid fa-badge-check fa-beat"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { toRaw } from "vue";

export default {
  data() {
    return {
      name: "airline"
    };
  },
  methods: {
    ...mapActions(["flightData"])
  },
  computed: {
    ...mapState(["flights"])
  },
  mounted() {
    this.$store.dispatch("flightData");
    // console.log(toRaw(this.$store.state.flights)) ;
  }
};
</script>

<style>
.tableContainer {
  border: 2px solid red;
  /* max-height: 80vh; */
  /* overflow-y: scroll; */
}
.tableContainer h3 {
  margin: 20px 30px;
}
table {
  margin: 0px 0 0 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-collapse: collapse;
  width: 95%;
  animation: fadein 1.5s ease-out;
  font-size: 1em;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
th {
  color: rgb(67, 65, 65);
  padding: 8px;
  text-align: center;
  font-weight: bold;
  color: cadetblue;
  background-color: darkgray;
}

td {
  padding: 8px;
  border-bottom: 1px solid #2c0a0a;
  text-align: center;
  transition: background-color 0.3s ease;
}
tr,
td {
  background-color: whitesmoke;
}

tr:last-child td {
  border-bottom: none;
}

th:hover,
td:hover,
tr:hover {
  background-color: rgba(153, 223, 247, 0.732);
  color: darkblue;
}
</style>


