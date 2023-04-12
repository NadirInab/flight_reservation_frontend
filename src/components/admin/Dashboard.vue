<template>
  <div class="admin-dashboard">
    <div class="sidebar">
      <div class="profile">
        <img src="../../assets/images/admin.avif" alt="Profile Picture" />
        <h2>Admin</h2>
      </div>
      <ul>
        <li>Statistics</li>
        <li @click="showFlights">Flights</li>
        <li>Users</li>
        <li>Tickets</li>
        <li>
          <router-link to="/dashboard/settings">Profile</router-link>Profile
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
      <Statistics />
      <Users />
      <Flights />
      <Profile />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from "vuex" ;
import Statistics from "./Statistics.vue";
import Users from "./Users.vue";
import Flights from "../../views/Flights.vue";
import Profile from "./Profile.vue";
export default {
  data(){
    return {
      showFlights : false
    }
  },
  components: {
    Statistics,
    Flights,
    Profile,
    Users
  }, 
  computed : {
  }, 
  methods : {
    showFlights(){
      console.log("show Flight") ;
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
}
.profile {
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  margin-left: 40px;
  box-sizing: border-box;
}

.profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}
.sidebar {
  flex: 0 0 200px;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: start;
}

li {
  left: 0;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background-color: #ddd;
}
a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #000;
}

.content {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: scroll;
  border: 2px solid green;
}
</style>
