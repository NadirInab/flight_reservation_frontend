<template>
  <div class="tableContainer">
    <h3>
      <!-- Where do you want to go? -->
      <i class="fa-solid fa-earth-americas fa-bounce"></i>
    </h3>
    <table>
      <thead>
        <tr>
          <th>
            <i class="fa-duotone fa-passport"></i> Flight Name
          </th>
          <th>
            <i class="fa-sharp fa-solid fa-calendar-days"></i> Date
          </th>
          <th>
            <i class="fa-sharp fa-solid fa-plane-departure"></i> From
          </th>
          <th>
            <i class="fa-sharp fa-solid fa-plane-arrival"></i> To
          </th>
          <th>
            <i class="fa-sharp fa-solid fa-plane-circle-check"></i> Airport
          </th>
          <th>
            <i class="fa-brands fa-bandcamp"></i> Airline
          </th>
          <th>
            <i class="fa-sharp fa-solid fa-money-check-dollar"></i> Price (MAD)
          </th>
          <th>
            <i class="fa-regular fa-seat-airline"></i> Seats
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flight in flights" :key="flight.id">
          <td class="flight-name">{{ flight.flight_name }}</td>
          <td class="flight-date">{{ flight.date }}</td>
          <td class="from-to">{{ flight.from_city }}</td>
          <td class="from-to">{{ flight.to_city }}</td>
          <td class="airport">{{ flight.from_airport }}</td>
          <td class="airline">{{ flight.airline }}</td>
          <td class="price">
            <b>{{flight.price}}</b>
          </td>
          <td class="seats">{{flight.number_of_seats}}</td>
          <td class="seats">
            <i @click="deleteFlight(flight.id)" class="fa-sharp fa-solid fa-trash mx-1 text-danger"></i>
            <i @click="upDateFlight(flight.id)" class="fa-solid fa-pen-to-square mx-1 text-primary"></i>
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
    ...mapActions(["flightData", "removeFlightFromDb", "editFlightData"]),
    deleteFlight(id) {
      this.removeFlightFromDb(id);
    },
    upDateFlight(id) {
      this.editFlightData(id);
    }
  },
  computed: {
    ...mapState(["flights"])
  },
  mounted() {
    this.$store.dispatch("flightData");
  },
  updated(){
    console.log(this.flights[this.flights.length -1]);
  }
};
</script>

<style scoped>
/* .tableContainer {
  border: 2px solid red;
  max-height: 80vh;
  overflow-y: scroll;
} */

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
  color: rgb(36, 17, 17);
  padding: 8px;
  text-align: center;
  font-weight: bold;
  background-color: rgba(85, 201, 255, 0.63);
}

td {
  padding: 8px;
  border-bottom: 1px dashed #000b5c;
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
i {
  cursor: pointer;
}
</style>


