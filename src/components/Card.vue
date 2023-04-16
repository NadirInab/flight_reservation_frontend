<template>
  <div class="card1">
    <div class="card-image">
      <img :src="getImageUrl" alt />
    </div>
    <div class="card-content">
      <img  src="https://cdn3.iconfinder.com/data/icons/world-flags-africa/64/_Morocco_2-64.png" alt="">
      <h3 class="card-title">{{ title }}</h3>
      <h3 class="card-title mt-2 text-danger">{{ price }} MAD</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  methods: {},
  computed: {
    getImageUrl() {
      return `http://localhost:8000/images/${this.imageUrl}`;
    }, 
    
  }
};
</script>

<style scoped>
.card1 {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  margin: 10px;
}
.card1:hover {
  scale: 1.01;
}
.card-image {
  position: relative;
  width: 200px;
  height: 180px;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
}
.card-image img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-image img:hover {
  opacity: 0.8;
}
.card-content {
  width: 150px;
  padding: 10px;
}
.card-content img {
  width: 30px;
  height: auto;
}
.card-title {
  margin-top: 10px 0px;
  font-size: 18px;
  font-weight: bold;
  color: #11004a;
}
.card-date {
  margin: 0;
  font-size: 14px;
  color: #999999;
}

@media only screen and (max-width: 830px) {
  .card1 {
    flex-direction: column;
  }
  .card-image {
    width: 100%;
  }
}
</style>
