<template>
  <div class="loader">
    <div class="loader-icon"></div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
}

.loader-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, 10%);
  width: 100px;
  height: 100px;
  background-image: url('../assets/images/air.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  animation: spin 3s linear infinite;
    transform: perspective(200px) translate3d(10px,  70px, 80px);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: (360deg); }
}
</style>
