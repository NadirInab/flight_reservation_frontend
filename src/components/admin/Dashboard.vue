<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Admin Dashboard</a>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link" to="/flights">Flights</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/users">Users</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tickets">Tickets</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
};
</script>

<style scoped>
.sidebar {
    /* border: 2px solid red; */
  position: fixed;
  top: 2rem;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

.nav-link {
  font-weight: 500;
  color: #333;
}

.nav-link:hover {
  color: #23527c;
}

.nav-link.active {
  color: #23527c;
  font-weight: 700;
}
</style>
