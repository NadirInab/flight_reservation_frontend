<template>
  <div class="form-container">
    <h3 class="text-center">Add Flight</h3>
    <form @submit.prevent="submitForm">
      <div>
        <div class="form-group">
          <label class="form-label1" for="flight_name">Flight Name</label>
          <input class="form-input" type="text" id="flight_name" v-model="flight_name" />
        </div>
        <div class="form-group">
          <label class="form-label1" for="from">From</label>
          <input class="form-input" type="text" id="from" v-model="from" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="price">Price</label>
          <input class="form-input" type="number" id="price" v-model="price" />
        </div>
      </div>

      <div>
        <div class="form-group">
          <label class="form-label1" for="airport">Airport</label>
          <input class="form-input" type="text" id="airport" v-model="airport" />
        </div>
        <div class="form-group">
          <label class="form-label1" for="to">To</label>
          <input class="form-input" type="text" id="to" v-model="to" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="aircraft">Aircraft</label>
          <input class="form-input" type="text" id="aircraft" v-model="aircraft" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="airline">Airline</label>
          <input class="form-input" type="text" id="airline" v-model="airline" />
        </div>
      </div>

      <div>
        <div class="form-group">
          <label class="form-label1" for="image">Image</label>
          <input class="form-input" type="text" id="image" v-model="image" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="date">Date</label>
          <input class="form-input" type="date" id="date" v-model="date" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="number_of_seats">Number of Seats</label>
          <input class="form-input" type="number" id="number_of_seats" v-model="number_of_seats" />
        </div>
      </div>

      <button class="form-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      flight_name: "",
      airport: "",
      from: "",
      to: "",
      date: "",
      airline: "",
      aircraft: "",
      image: "",
      price: "",
      number_of_seats: ""
    };
  },
  methods: {
    ...mapActions(["addFlight"]),
    submitForm() {
      let myDate = new Date(this.date) ;
      // let theDate = date('Y-m-d H:i:s', strtotime(myDate)) ;
       const formattedDate = myDate.toISOString().slice(0, 19).replace('T', ' ') ;
       console.log(formattedDate) ;
      const flightData = {
        flight_name: this.flight_name,
        airport: this.airport,
        from: this.from,
        to: this.to,
        date: formattedDate,
        airline: this.airline,
        aircraft: this.aircraft,
        image: this.image,
        price: this.price,
        number_of_seats: this.number_of_seats
      };
      this.addFlight(flightData);
    }
  }
};
</script>
<style scoped>
form {
  /* border: 2px solid red; */
  display: grid;
  width: 75%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  /* margin: 100px 0 0 200px; */
}
.form-group {
  margin: 0 5px 5px 0;
  background-color: white;
}
button {
  grid-column: 1 / -1; /* Make button span both columns */
  justify-self: center; /* Center button horizontally */
  align-self: center; /* Center button vertically */
}
</style>