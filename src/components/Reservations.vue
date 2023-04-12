<template>
  <div class="flight-reservation">
    <h1>Quickly scan all your favourite travel sites</h1>
    <form @submit.prevent="searchFlights">
      <div class="myForm">
        <div class="form-group">
          <label for="from">
            <i class="fa-solid fa-plane-departure"></i> From
          </label>
          <select class="custom-select" id="from" v-model="from_city" name>
            <option
              v-for="flight in flights"
              :key="flight.id"
              :value="flight.from_city"
            >{{ flight.from_city }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="to">
            <i class="fa-solid fa-plane-arrival"></i> To
          </label>
          <select id="from" v-model="to_city" name>
            <option
              v-for="flight in flights"
              :key="flight.id"
              :value="flight.to_city"
            >{{ flight.to_city }}</option>
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
      from_city: "Port Marquesborough",
      to_city: "Lesliehaven",
      date: "",
      seats: 1,
      selectedDate: null, 
    };
  },
  computed: {
    ...mapState(["searchedFlights"]),
    ...mapGetters(["getSearchedFlight"]),
    ...mapState(["flights"])
  },
  methods: {
    ...mapActions(["flightData", "getFlightDataFromTo"]),
    searchFlights() {
      const data = {
        from_city: this.from_city,
        to_city: this.to_city,
        date: this.date,
        seats: this.seats
      };
      // console.log(data);
      this.getFlightDataFromTo(data);
    }
  },
  mounted() {
    this.$store.dispatch("flightData");
  }
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Petrona:ital,wght@1,300;1,400&display=swap");
.flight-reservation {
  background-color: lightblue;
  height: 30rem;
  padding: 30px;
  background-image: linear-gradient(
    0deg,
    hsl(206deg 75% 42%) 0%,
    hsl(210deg 50% 50%) 6%,
    hsl(211deg 47% 56%) 12%,
    hsl(212deg 46% 60%) 18%,
    hsl(213deg 44% 64%) 24%,
    hsl(214deg 43% 68%) 31%,
    hsl(214deg 42% 71%) 37%,
    hsl(215deg 42% 74%) 44%,
    hsl(215deg 41% 77%) 51%,
    hsl(215deg 40% 79%) 57%,
    hsl(216deg 40% 82%) 63%,
    hsl(216deg 39% 85%) 68%,
    hsl(216deg 39% 87%) 72%,
    hsl(216deg 38% 89%) 77%,
    hsl(216deg 38% 92%) 82%,
    hsl(217deg 37% 94%) 86%,
    hsl(217deg 37% 96%) 91%,
    hsl(217deg 37% 98%) 95%,
    hsl(0deg 0% 100%) 100%
  );
}
.flight-reservation h1 {
  margin: 15px 0 0 20px;
  font-family: "Petrona", serif;
}
.myForm {
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
/* .custom-select {
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3E%3Cpath d='M8 12.5L3.5 8H13z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1em auto;
  border: 1px solid #74b5f7;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
} */
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  background: rgba(185, 224, 241, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
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
