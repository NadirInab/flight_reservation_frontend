<template>
  <div class="card1">
    <div class="card-image">
      <img src="../assets/images/roma.jpg" alt />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
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
    date: {
      type: String,
      required: true
    }
  },
  methods: {}
};
</script>

<style scoped>
.card1 {
  display: flex;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.card1:hover {
  scale: 1.01;
}
.card-image {
  width: 200px;
  height: 150px;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-content {
  width: 150px;

  padding: 10px;
}
.card-title {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
.card-date {
  margin: 0;
  font-size: 14px;
  color: #999999;
}
</style>
