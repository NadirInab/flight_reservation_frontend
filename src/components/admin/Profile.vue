<template>
  <div class="profileContainer">
    <div class="first p-3">
      <img class="item1" src="../../assets/images/admin.avif" alt />
      <div class="item2 p-3 w-100">
        <h3 class>Lorem, ipsum.</h3>
        <span class="text-primary ml-5">johnDoe@gmail.com</span> -
        <b class="text-muted">Admin</b>
      </div>
    </div>
    <div class="formContainer">
      <form>
        <div class="group mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            class="form-control w-75"
            id="name"
            placeholder="Enter your name"
            value="JohnDoe"
          />
        </div>
        <div class="group mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control w-75"
            id="email"
            placeholder="Enter your email"
            value="JohnDoe@gmail.com"
          />
        </div>
        <div class="group mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control w-75 mx-3"
            id="password"
            placeholder="Enter your password"
            value="12345678"
          />
        </div>
        <div class="group mb-3">
          <label for="password" class="form-label">Role</label>
          <input
            type="password"
            class="form-control w-75"
            id="password"
            placeholder="Enter your password"
            value="Admin"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profileContainer {
  font-style: italic;
  width: 80%;
  height: 80vh;
  margin: 10px 30px;
  padding: 20px;
  background-color: rgba(238, 236, 236, 0.668);
}
.first {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  border-bottom: 2px dashed rgb(174, 174, 174);
}
.item1 {
  flex: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 10px;
}

.item2 {
  margin-top: 20px;
}
.formContainer {
  padding: 20px;
}
.group {
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.group label {
  text-align: start;
  /* border: 1px solid rgb(16, 85, 81); */
  /* font-size: 1.2rem; */
  font-weight: bold;
  font-style: italic;
}
</style>