<template>
  <div class="admin-dashboard">
    <div class="sidebar">
      <div class="profile">
        <img src="../../assets/images/admin.avif" alt="Profile Picture" />
        <h2>Admin</h2>
      </div>
      <ul>
        <li>
          <router-link :to="{name : 'admin.statistics'}">Stats</router-link>
        </li>

        <li>
          <router-link to="/admin/flights">Flights</router-link>
        </li>
        <li>
          <router-link to="/admin/users">Users</router-link>
        </li>
        <li>
          <router-link to="/admin/tickets">Tickets</router-link>
        </li>
        <li>
          <router-link to="/admin/profile">Profile</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Statistics from "./Statistics.vue";
import Users from "./Users.vue";
import Flights from "../../views/Flights.vue";
import Profile from "./Profile.vue";
import Tickets from "./Tickets.vue";
export default {
  data() {
    return {
      showFlights: false
    };
  },
  components: {
    Statistics,
    Flights,
    Profile,
    Users,
    Tickets
  },
  computed: {},
  methods: {
    showFlights() {
      console.log("show Flight");
      console.log(this.$store.state.isAdmin) ;
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
  width: 90vw;
  flex: 1;
  padding: 20px;
  margin-left: 80;
  box-sizing: border-box;
  overflow-y: scroll;
  border: 3px solid rgb(5, 110, 96);
}
</style>
