<template>
  <section class="ticketContainer">
    <h1>Your Flights</h1>
    <div class="row mt-4" v-if="getSearchedFlight">
      <article :key="ticket" v-for="ticket in getSearchedFlight" id="Ticket" class="card fl-left">
        <h4 class="text-center text-primary border-2 border-bottom w-100">{{authUser && authUser.name}}</h4>
        <h4 class="text-center">{{ticket.flight_name}}</h4>
        <section class="date">
          <time>
            <span>{{formattedDate.split(" ")[0]}}</span>
            <span>{{formattedDate.split(" ")[1]}}</span>
          </time>
          <h5 v-if="ticket" class="text-danger text-decoration-underline">{{ticket.price}} DH</h5>
        </section>

        <section class="card-cont">
          <div class="even-date">
            <i class="fa fa-map-marker text-danger"></i>
            <b class="mx-4 p-2">Departure : {{ticket.from}}</b>
            <h3>{{getSearchedFlight.flight_name}}</h3>
          </div>

          <div class="even-date">
            <i class="fa-sharp fa-solid fa-plane-departure text-success"></i>
            <span class="mx-4 p-2">Airport : {{ticket.departure_city.airport}}</span>
          </div>

          <div class="even-date">
            <i class="fa-brands fa-bandcamp text-warning"></i>
            <span class="mx-4 p-2">Airline : {{ticket.airline}}</span>
          </div>

          <div class="even-date">
            <i class="fa fa-calendar text-secondary"></i>
            <time>
              <span
                class="mx-4 p-2 text-danger"
              >Time : {{`${formattedDate.split(" ")[2]}h ${formattedDate.split(" ")[3]}` }}</span>
            </time>
          </div>

          <div class="even-info">
            <i class="fa fa-map-marker text-danger"></i>
            <b class="mx-4 p-2">Arrival : {{ticket.to}}</b>
          </div>

          <router-link
            @click="bookTheTicket(ticket.id)"
            class="bg-danger text-white"
            :to="{ name: 'Payement' }"
          >Book tickets</router-link>
        </section>

        <section class="from_to">
          <div class="inFromTo container bg-white">
            <span>{{ticket.to}}</span>
            <h3>
              <i class="fa-sharp fa-solid fa-plane-circle-check fa-bounce"></i>
            </h3>
            <span>{{ticket.from}}</span>
          </div >
        </section>
      </article>
    </div>
    <div class="row"></div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      data: []
    };
  },
  computed: {
    ...mapGetters(["getSearchedFlight", "formattedDate"]),
    ...mapState(["searchedFlights", "authUser"]),
    ...mapActions(["bookTicket"])
  },
  methods: {
    bookTheTicket(id) {
      let ticketData = {
        flight_id: id,
        user_id: this.authUser.id
      };
      localStorage.setItem("ticketData", JSON.stringify(ticketData));
      // this.$store.dispatch("bookTicket", ticketData);
    }
  },
  components: {
    "router-link": RouterLink
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald");

.ticketContainer {
  width: 90%;
  height: fit-content;
  margin: 20px auto;
}
.fl-left {
  float: left;
}

.fl-right {
  float: right;
}

h1 {
  text-transform: uppercase;
  font-weight: 900;
  border-left: 10px solid #fec500;
  padding-left: 10px;
}

.row {
  overflow: hidden;
  margin: 30px auto;
}

.card {
  border: 2px solid rgba(123, 123, 123, 0.697);
  display: table-row;
  width: 70%;
  background-color: #fff;
  color: #110c0c;
  margin-bottom: 20px auto;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  border-radius: 4px;
  position: relative;
}

.date {
  display: table-cell;
  width: 25%;
  position: relative;
  text-align: center;
  border-right: 2px dashed #dadde6;
}
.from_to {
  display: table-cell;
  width: 20%;
  position: relative;
  text-align: center;
  border-left: 2px dashed #dadde6;
  margin-bottom: 20px;
}
.inFromTo {
  display: flex;
  flex-direction: column;
  height: 130px;
}
.date time {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 0.8em;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.date time span {
  display: block;
  margin: 10px;
}

.date time span {
  color: #2b2b2b;
  font-weight: 600;
  font-size: 250%;
}

.date time span:last-child {
  text-transform: uppercase;
  font-weight: 600;
  margin-top: -10px;
}

.card-cont {
  display: table-cell;
  width: 55%;
  font-size: 85%;
  padding: 10px 10px 30px 50px;
}

.card-cont h3 {
  color: #3c3c3c;
  font-size: 130%;
}

.row:last-child .card:last-of-type .card-cont h3 {
  text-decoration: line-through;
}

.card-cont > div {
  display: table-row;
}

.card-cont .even-date i,
.card-cont .even-info i,
.card-cont .even-date time,
.card-cont .even-info p {
  display: table-cell;
}

.card-cont .even-date i,
.card-cont .even-info i {
  padding: 5% 5% 0 0;
}

.card-cont .even-info p {
  padding: 30px 50px 0 0;
}

.card-cont .even-date time span {
  display: block;
}

.card-cont a {
  display: block;
  text-decoration: none;
  width: 80px;
  height: 30px;
  background-color: #d8dde0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.row:last-child .card:first-child .card-cont a {
  background-color: #037fdd;
}

.row:last-child .card:last-child .card-cont a {
  background-color: #f8504c;
}

@media screen and (max-width: 860px) {
  .card {
    display: block;
    float: none;
    width: 100%;
    margin-bottom: 10px;
  }
  .card-cont .even-date,
  .card-cont .even-info {
    font-size: 75%;
  }
}
</style>