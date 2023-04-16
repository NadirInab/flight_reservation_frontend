<template>
  <div class="tableContainer pt-4">
    <div v-if="!isAdmin" class="container bg-white">
      <h3>
        Where do you want to go?
        <i class="fa-solid fa-earth-americas fa-bounce"></i>
      </h3>
    </div>
    <div v-else>
      <button @click="showForm" class="btn btn-success mx-4 mb-3">Add Flight</button>
    </div>
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
          <td  class="seats">
            <i @click="deleteFlight(flight.id)" class="fa-sharp fa-solid fa-trash mx-1 text-danger"></i>
            <i @click="upDateFlight(flight.id)" class="fa-solid fa-pen-to-square mx-1 text-primary"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "airline"
    };
  },
  methods: {
    ...mapActions(["flightData", "removeFlightFromDb", "editFlightData"]),
    ...mapState(["showForm"]),
    deleteFlight(id) {
      this.removeFlightFromDb(id);
    },
    upDateFlight(id) {
      console.log(id) ;
      this.editFlightData(id);
    },
    showForm() {
      this.showForm = !this.showForm
    }
  },
  computed: {
    ...mapState(["flights", "editedFlight"]),
    ...mapGetters(["isAdmin"])
  }, 

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
  color: rgb(249, 237, 237);
  padding: 8px;
  text-align: center;
  font-weight: bold;
  background-color: rgba(1, 27, 39, 0.749);
}
tr:first-child {
  background-color: #f6cccc6e;
}

tr:nth-child(2n + 1) {
  background-color: #384f5c79;
}

td {
  padding: 8px;
  border-bottom: 1px dashed #055890;
  text-align: center;
  transition: background-color 0.3s ease;
}

th:hover,
td:hover,
tr:hover {
  background-color: rgba(1, 69, 91, 0.384);
  color: darkblue;
}
i {
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  th,
  td {
    padding: 5px;
  }
}
</style>


