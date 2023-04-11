<template>
  <header>
    <nav class="navbar" :class="{ 'navbar--open': isNavOpen, 'fixed-navbar': isFixed  }">
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
          <router-link to="/About">Destinations</router-link>
        </li>
        <!-- <li>
          <router-link to="/About">Stories</router-link>
        </li>-->
        <li>
          <router-link to="/Sign">
            <i class="fa-sharp fa-solid fa-user"></i> Sign Up
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- <router-view /> -->
  </header>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      isNavOpen: false,
      isFixed: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    handleScroll() {
      this.isFixed = window.pageYOffset > 0;
    }
  },
  components: {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters(["isAdmin"])
  }
};
</script>

<style scoped>
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
  /* padding: 1rem; */
  background-color: transparent;
  z-index: 1;
  border-bottom: 1px solid lightblue;
}
.fixed-navbar {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.fixed-navbar ul li a {
  color: #f3bb20;
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
  /* color: #ff6e31; */
  box-shadow: 1.5px 1px 1px 0px;
  padding: 5px;
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
/* .navbar__menu li a:hover {
  color: white;
} */

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
