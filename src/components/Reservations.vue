<template>
  <div class="flight-reservation">
    <!-- <h2>Flight Reservation</h2> -->
    <form @submit.prevent="submitForm">
      <div class="myForm">
        <div class="form-group">
          <label for="from">From</label>
          <!-- <input type="text" id="from" v-model="from" required> -->
          <select id="from" v-model="from" name>
            <option value="Rabat">Rabat</option>
            <option value="Tanger">Tanger</option>
          </select>
        </div>
        <div class="form-group">
          <label for="to">To</label>
          <input type="text" id="to" v-model="to" required />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" id="date" v-model="date" required />
        </div>
        <div class="form-group">
          <label for="seats">Number of Seats</label>
          <input type="number" id="seats" v-model.number="seats" min="1" max="10" required />
        </div>
      </div>
      <button type="submit">Search Flights</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      to: "",
      date: "",
      seats: 1
    };
  },
  methods: {
    submitForm() {
      // Here you can add your form submission logic
      console.log("Form submitted:", this.from, this.to, this.date, this.seats);
    }
  }
};
</script>

<style>
.flight-reservation {
  background-color: transparent;
  /* width: 90%; */
  height: 50vh;
  margin: 70px auto;
  top: 50%;
}
.myForm {
  width: 100%;
  border: 2px solid red;
  /* display: flex;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: rgb(5, 168, 222);
  border-radius: 10px;
  margin: 1rem 1rem  ;
  /* max-width: 1rem;
  min-width: 15rem; */
  /* border: 2px solid lightcoral; */
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
  padding: 1rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  display: block;
  margin: auto;
  width: 40%;
  transition: all 0.3s ease-in-out;
}
button:hover {
  transform: translateY(-5px);
  /* background-color: light; */
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
