<template>
  <div>
    <h1>Statistics :</h1>
    <div class="stats">
      <div class="container1">
        <div>
          <h3>45</h3>
          <span class="muted">Users</span>
        </div>
        <div>
          <span class="font">
            <i class="fa-solid fa-user"></i>
          </span>
        </div>
      </div>
      <div class="container1">
        <div>
          <h3>83</h3>
          <span class="muted">Tickets</span>
        </div>
        <div>
          <span class="font">
            <!-- <i class="fa-solid fa-user"></i> -->

           <i class="fa-light fa-tickets-airline"></i>
          </span>
        </div>
      </div>
      <div class="container1">
        <div>
          <h3>56</h3>
          <span class="muted">Flights</span>
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
export default {};
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-10px);
}
.font {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 900;
  border-left: 10px solid #1039cc;
  padding-left: 10px;
  margin-bottom: 30px;
}
.stats {
  display: flex;
}
</style>