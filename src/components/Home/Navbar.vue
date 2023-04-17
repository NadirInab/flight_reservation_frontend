<template>
  <header>
    <nav  class="navbar" :class="{ 'navbar--open': isNavOpen, 'fixed-navbar': isFixed  }">
      <div class="navbar__brand">
        <a href="#">Flights</a>
      </div>
      <!-- <button class="navbar__toggle" @click="toggleNav">
      <span class="navbar__toggle-icon"></span>
      </button>-->
      <ul class="navbar__menu">
        <li v-if="isAdmin">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fa-sharp fa-solid fa-house"></i> Home
          </router-link>
        </li>
        <li>
          <router-link to="/Flights">
            <i class="fa-sharp fa-solid fa-plane-circle-check"></i> Flights
          </router-link>
        </li>
        <li>
          <router-link to="/About"><i class="fa-solid fa-earth-asia"></i> Destinations</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/Sign">
            <i class="fa-sharp fa-solid fa-user"></i> Sign Up
          </router-link>
        </li>
        <li v-if="isLoggedIn">
          <Avatar :email="email" />
        </li>
        <li class="out" @click="SignOut" v-if="isLoggedIn">
          <router-link to="/">
            <i class="fa-sharp fa-solid fa-right-from-bracket"></i>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- <router-view /> -->
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Avatar from "../Cards/Avatar.vue";

export default {
  data() {
    return {
      isNavOpen: false,
      isFixed: false,
      email: "example@email.com"
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    handleScroll() {
      this.isFixed = window.pageYOffset > 0;
    },
    ...mapActions(["SignOut"])
  },
  components: {
    Avatar
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters(["isAdmin"]),
    isLoggedIn() {
      return localStorage.getItem("user") !== null;
    }
  }
};
</script>

<style scoped>
.out:hover {
  content: "SignOut";
  border: 2px solid red;
}
header {
  padding: 0;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(240, 240, 240, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;
  border-bottom: 1px solid lightblue;
}
.fixed-navbar {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
.fixed-navbar ul li a {
  color: #e4edf1;
}
.hero-section {
  height: 100vh;
  background-position: center;
  background-size: cover;
}
.navbar__brand a {
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #449eff;
}

.navbar__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar__menu li {
  margin: rgb(1, 94, 77);
  padding: 10px;
  transition: transform 0.5s ease;
}

.navbar__menu li a {
  font-size: 1rem;
  text-decoration: none;
  color: white;
  font-style: italic;
}
.navbar__menu li:hover {
  background-color: rgba(47, 79, 79, 0.634);
  font-weight: bold;
  border-radius: 5px;
  transform: translateX(20px);
}
.navbar__toggle {
  position: relative;
  display: block;
  width: 32px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.navbar__toggle-icon,
.navbar__toggle-icon::before,
.navbar__toggle-icon::after {
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
}

.navbar__toggle-icon::before {
  content: "";
  top: -8px;
}

.navbar__toggle-icon::after {
  content: "";
  bottom: -8px;
}

.navbar--open .navbar__toggle-icon {
  background-color: transparent;
}

.navbar--open .navbar__toggle-icon::before {
  transform: translateY(8px) rotate(45deg);
}

.navbar--open .navbar__toggle-icon::after {
  transform: translateY(-8px) rotate(-45deg);
}

@media only screen and (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
  }

  .navbar__menu {
    flex-direction: row;
  }

  .navbar__menu li {
    margin: 0 1rem;
  }
}
</style>
