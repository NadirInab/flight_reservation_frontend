<template>
  <header>
    <nav class="navbar" :class="{ 'navbar--open': isNavOpen }">
      <div class="navbar__brand">
        <a href="#">Flights</a>
      </div>
      <!-- <button class="navbar__toggle" @click="toggleNav">
      <span class="navbar__toggle-icon"></span>
      </button>-->
      <ul class="navbar__menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Flights</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
        <li>
          <a href="#">Join</a>
        </li>
      </ul>
    </nav>
    <Hero />
  </header>
</template>

<script>
import Hero from "./Hero.vue";

export default {
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  },
  components: {
    Hero
  }
};
</script>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: transparent;
}

.navbar__brand a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
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
  transition: transform 0.5s ease
}

.navbar__menu li a {
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
}
.navbar__menu li:hover {
  background-color: #2082f3;
  font-weight: bold;
  border-radius: 5px;
   transform: translateX(10px)
}
.navbar__menu li a:hover{
  color: white;
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
  }

  .navbar__menu {
    flex-direction: row;
  }

  .navbar__menu li {
    margin: 0 1rem;
  }
}
</style>
