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
          <label class="form-label1 mb-2" for="image">From Image</label>
          <input class="form-input" type="file" id="image" @change="onFileSelected" />
        </div>
        <div class="form-group">
          <label class="form-label1 mb-2" for="image">To Image</label>
          <input class="form-input" type="file" id="image" @change="onFileSelected2" />
        </div>

        <div class="form-group">
          <label class="form-label1 mb-2" for="date">Date</label>
          <input class="form-input" type="date" id="date" v-model="date" />
        </div>

        <div class="form-group">
          <label class="form-label1 mb-2" for="number_of_seats">Number of Seats</label>
          <input class="form-input" type="number" id="number_of_seats" v-model="seats" />
        </div>
      </div>
      <div></div>
      <button class="form-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import tes from "../../assets/images/";

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
.form-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-image: url("../../assets/images/addFlightbg.jfif");
  background-size: cover;
  background-position: center;
}
form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  background: rgba(174, 205, 237, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1.5px);
  -webkit-backdrop-filter: blur(1.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.form-group {
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.form-label1 {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}

.form-input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #243f3f86;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #216eb1;
  box-shadow: 0 3 2 4px rgba(2, 58, 106, 0.593);
}

.form-button {
  display: block;
  text-align: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #00488b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #026492;
}
</style>
