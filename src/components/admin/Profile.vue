<template>
  <div class="profileContainer bg-white">
    <div class="first p-3">
      <img class="item1" src="../../assets/images/admin.avif" alt />
      <div class="item2 p-3 w-100">
        <h3 class>Lorem, ipsum.</h3>
        <span class="text-primary ml-5">{{getAdminData().email}}</span> -
        <b class="text-muted">{{getRole().name}}</b>
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
            :value="getAdminData().name"
          />
        </div>
        <div class="group mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control w-75"
            id="email"
            placeholder="Enter your email"
            :value="getAdminData().email"
          />
        </div>
        <div class="group mb-3">
          <label for="role" class="form-label">Role</label>
          <input
            type="text"
            class="form-control w-75"
            id="password"
            placeholder
            :value="getRole().name"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "test"
    };
  },
  components: {},
  methods: {
    getRole() {
      let admin = {
        name: JSON.parse(localStorage.getItem("user")).roles[0].name
      };
      return admin;
    },
    getAdminData() {
      let admin = {
        name: JSON.parse(localStorage.getItem("user")).name,
        email: JSON.parse(localStorage.getItem("user")).email
      };
      return admin;
    }
  }
};
</script>

<style>
.profileContainer {
  font-style: italic;
  width: 90%;
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