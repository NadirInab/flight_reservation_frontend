<template>
  <header class="avatarContainer">
    <b class="mx-2">{{userName.name}}</b>
    <div class="avatar">
      <img :src="avatarUrl" :size="80" />
    </div>
  </header>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "Avatar",
  data(){
    return {
        userName : "", 
    }
  },
  props: {
    email: {
      type: String,
      required: true,
      default: "user@gmail.com"
    },
    size: {
      type: Number,
      default: 80
    }
  },
  computed: {
    avatarUrl() {
      const hash = this.md5(this.email.trim().toLowerCase());
      return `https://www.gravatar.com/avatar/${hash}?s=${this.size}&d=identicon`;
    }
  },
  methods: {
    md5(str) {
      return CryptoJS.MD5(str).toString();
    }
  }, 
  mounted(){
    this.userName = JSON.parse(localStorage.getItem("user")) ;
    // console.log(this.userName.name) ;
  }
};
</script>
<style scoped>
.avatarContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  height: 40px;
  width: 40px;
}
.avatar img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>
