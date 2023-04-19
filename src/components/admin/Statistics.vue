<template>
  <div class="p-4">
    <div class="stats">
      <div class="container1">
        <div>
          <h3>{{this.users.length}}</h3>
          <span class="muted fw-bold">Passenger(s)</span>
        </div>
        <div>
          <span class="font">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <div class="container1">
        <div>
          <h3>{{this.tickets.length}}</h3>
          <span class="muted fw-bold">Ticket(s)</span>
        </div>
        <div>
          <span class="font">
            <!-- <i class="fa-solid fa-user"></i> -->
            <img src="https://cdn-icons-png.flaticon.com/512/389/389801.png" alt srcset />
          </span>
        </div>
      </div>
      <div class="container1">
        <div>
          <h3>{{this.flights.length}}</h3>
          <span class="muted fw-bold">Flight(s)</span>
        </div>
        <div>
          <span class="font">
            <i class="fa-solid fa-plane-circle-check"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["users", "tickets", "flights"]),
    ...mapActions(["getTickets", "getUsers", "flightData"])
  },
  mounted() {
    this.getTickets, this.getUsers, this.flightData;
  }
};
</script>

<style scoped>
.container1 {
  width: 20rem;
  height: 10rem;
  display: flex;
  margin: 0 3rem;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.container1:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
}
.font {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  border-left: 10px solid #1039cc;
  padding-left: 10px;
  margin-bottom: 30px;
}
.font img {
  width: 50px;
  height: 70px;
}
.stats {
  display: flex;
  margin-top: 30px;
  padding: 20px;
}
</style>