<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div>
        <div class="form-group">
          <label class="form-label" for="flight_name">Flight Name</label>
          <input class="form-input" type="text" id="flight_name" v-model="flight_name" />
        </div>
        <div class="form-group">
          <label class="form-label" for="from">From</label>
          <input class="form-input" type="text" id="from" v-model="from" />
        </div>

        <div class="form-group">
          <label class="form-label" for="price">Price</label>
          <input class="form-input" type="number" id="price" v-model="price" />
        </div>
      </div>

      <div>
        <div class="form-group">
          <label class="form-label" for="airport">Airport</label>
          <input class="form-input" type="text" id="airport" v-model="airport" />
        </div>
        <div class="form-group">
          <label class="form-label" for="to">To</label>
          <input class="form-input" type="text" id="to" v-model="to" />
        </div>

        <div class="form-group">
          <label class="form-label" for="aircraft">Aircraft</label>
          <input class="form-input" type="text" id="aircraft" v-model="aircraft" />
        </div>

        <div class="form-group">
          <label class="form-label" for="airline">Airline</label>
          <input class="form-input" type="text" id="airline" v-model="airline" />
        </div>
      </div>

      <div>
        <div class="form-group">
          <label class="form-label" for="image">Image</label>
          <input class="form-input" type="text" id="image" v-model="image" />
        </div>

        <div class="form-group">
          <label class="form-label" for="date">Date</label>
          <input class="form-input" type="date" id="date" v-model="date" />
        </div>

        <div class="form-group">
          <label class="form-label" for="number_of_seats">Number of Seats</label>
          <input class="form-input" type="number" id="number_of_seats" v-model="number_of_seats" />
        </div>
      </div>

      <button class="form-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

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
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/flights", {
          flight_name: this.flight_name,
          airport: this.airport,
          from: this.from,
          to: this.to,
          date: this.date,
          airline: this.airline,
          aircraft: this.aircraft,
          image: this.image,
          price: this.price,
          number_of_seats: this.number_of_seats
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  }
};
</script>
<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50%;
  margin: 100px 0 0 200px;
}
.form-container {
  border: 2px solid red;
  padding: 1px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 2px;
}

.form-input {
  display: block;
  margin: auto;
  /* width: 75%; */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0069d9;
}
button {
  grid-column: 1 / -1; /* Make button span both columns */
  justify-self: center; /* Center button horizontally */
  align-self: center; /* Center button vertically */
}
</style>