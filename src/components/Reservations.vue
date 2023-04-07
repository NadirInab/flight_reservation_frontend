<template>
  <div class="flight-reservation">
    <h2>Quickly scan all your favourite travel sites</h2>
    <form @submit.prevent="searchFlights">
      <div class="myForm">
        <div class="form-group">
          <label for="from">
            <i class="fa-solid fa-plane-departure"></i> From
          </label>
          <select id="from" v-model="from" name>
            <option
              v-for="flight in flights"
              :key="flight.id"
              :value="flight.from "
            >{{ flight.from }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="to">
            <i class="fa-solid fa-plane-arrival"></i> To
          </label>
          <select id="from" v-model="to" name>
            <option v-for="flight in flights" :key="flight.id" :value="flight.to">{{ flight.to }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="date">
            <i class="fa-solid fa-calendar-days"></i> Date
          </label>
          <input type="date" id="date" v-model="date" required />
        </div>
        <div class="form-group">
          <label for="seats">
            <i class="fa-duotone fa-person-seat"></i> Number of Seats
          </label>
          <input type="number" id="seats" v-model.number="seats" min="1" max="10" required />
        </div>
      </div>
      <button @click="showTicket" class="booking-button" type="submit">
        Search Flights
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      from: "",
      to: "",
      date: "",
      seats: 1
    };
  },
  computed: {
    ...mapState(["searchedFlights"]),
    ...mapGetters(["getSearchedFlight"])
  },
  methods: {
    ...mapActions(["flightData", "getFlightDataFromTo"]),
    searchFlights() {
      const data = {
        from: this.from,
        to: this.to,
        date: this.date,
        seats: this.seats
      };
      this.getFlightDataFromTo(data);
      // this.$store.dispatch("getFlightDataFromTo", data);
    }
  },
  computed: {
    ...mapState(["flights"])
  },
  mounted() {
    // ...mapActions(["flightData']) ;
    this.$store.dispatch("flightData");
  }
};
</script>

<style >
.flight-reservation {
  /* border: 2px solid red; */
  background-color: lightblue;
  height: auto;
  top: 50%;
}
.flight-reservation h2 {
  margin: 15px 0 0 20px;
}
.myForm {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  background: rgba(216, 249, 254, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  margin: 1rem 1rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

select,
input[type="text"],
input[type="date"],
input[type="number"] {
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(1, 78, 1, 0.644) 0px 30px 60px -30px,
    rgba(0, 81, 161, 0.35) 0px -2px 6px 0px inset;
}

button[type="submit"] {
  background-color: Teal;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  padding: 1rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  margin: auto;
  width: 20%;
  transition: all 0.3s ease-in-out;
}
button:hover {
  transform: translateY(-5px);
  background-color: #0056b3;
}
button::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.3s ease-in-out;
}

button:hover::after {
  transform: translate(-50%, -50%) scale(3);
}

@media only screen and (max-width: 800px) {
  .flight-reservation {
    background-color: transparent;
    width: 90%;
    height: 100vh;
    margin: 70px auto;
    top: 50%;
  }
  .myForm {
    display: flex;
    flex-direction: column;

    /* flex-direction: row;
    justify-content: space-between;
    height: fit-content; */
  }

  /* .navbar__menu {
    flex-direction: row;
  }

  .navbar__menu li {
    margin: 0 1rem;
  } */
}
</style>
