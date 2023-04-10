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
          <label class="form-label1" for="from">From City</label>
          <input class="form-input" type="text" id="from" v-model="from_city" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="price">Price</label>
          <input class="form-input" type="number" id="price" v-model="price" />
        </div>
        <div class="form-group">
          <label class="form-label1" for="price">To City</label>
          <input class="form-input" type="number" id="price" v-model="to_city" />
        </div>
      </div>
      <div>
        <div class="form-group">
          <label class="form-label1" for="airport">From Airport</label>
          <input class="form-input" type="text" id="airport" v-model="from_airport" />
        </div>
        <div class="form-group">
          <label class="form-label1" for="to">To Airport</label>
          <input class="form-input" type="text" id="to" v-model="to_airport" />
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
          <label class="form-label1" for="image">From Image</label>
          <input class="form-input" type="file" id="image" @change="onFileSelected" />
        </div>
        <div class="form-group">
          <label class="form-label1" for="image">To Image</label>
          <input class="form-input" type="file" id="image" @change="onFileSelected2" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="date">Date</label>
          <input class="form-input" type="date" id="date" v-model="date" />
        </div>

        <div class="form-group">
          <label class="form-label1" for="number_of_seats">Number of Seats</label>
          <input class="form-input" type="number" id="number_of_seats" v-model="seats" />
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
      from_city: "",
      to_city: "",
      from_airport: "",
      to_airport: "",
      from_image: "",
      to_image: "",
      date: "",
      airline: "",
      aircraft: "",
      price: "",
      seats: ""
    };
  },
  methods: {
    ...mapActions(["addFlight"]),
    onFileSelected(event) {
      this.from_image = event.target.files[0];
    },
    onFileSelected2(event) {
      this.to_image = event.target.files[0];
      console.log(this.to_image);
    },
    toFormData() {
      const formData = new FormData();
      formData.append("flight_name", this.flight_name);
      formData.append("from_city", this.from_city);
      formData.append("to_city", this.to_city);
      formData.append("from_airport", this.from_airport);
      formData.append("to_airport", this.to_airport);
      formData.append("date", this.date);
      formData.append("aircraft", this.aircraft);
      formData.append("airline", this.airline);
      formData.append("price", this.price);
      formData.append("seats", this.seats);
      formData.append("to_image", this.to_image);
      formData.append("from_image", this.from_image);
      return formData;
    },
    submitForm() {
      this.addFlight(this.toFormData());
    }
  }
};
</script>
<style scoped>
form {
  display: grid;
  width: 75%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
}
.form-group {
  margin: 0 5px 5px 0;
  background-color: white;
}
button {
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
}
</style>