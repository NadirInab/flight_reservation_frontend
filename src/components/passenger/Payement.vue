<template>
  <div class="hero">
    <div class="container1 p-0">
      <div class="card px-4">
        <p class="h8 py-3">Payment Details</p>
        <div class="row gx-3">
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">Person Name</p>
              <input v-model="personName" class="form-control mb-3" type="text" placeholder="Name" />
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex flex-column">
              <p class="text mb-1">Card Number</p>
              <input
                v-model="cardNumber"
                class="form-control mb-3"
                type="text"
                placeholder="1234 5678 435678"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">Expiry</p>
              <input
                v-model="expirationDate"
                class="form-control mb-3"
                type="text"
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex flex-column">
              <p class="text mb-1">CVV/CVC</p>
              <input v-model="cvc" class="form-control mb-3 pt-2" type="text" placeholder="123" />
            </div>
          </div>
          <div class="col-12">
            <div @click="handleSubmit" class="btn btn-primary mb-3">
              <span
                v-if="getSearchedFlight"
                class="ps-3 fw-bold"
              >{{getSearchedFlight[0] && getSearchedFlight[0].price}} MAD</span>
              <span class="fas fa-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img id="saved-image" src />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      personName: this.getUserName(),
      cardNumber: "4242424242424242",
      expirationDate: "",
      cvc: "",
      amount: this.getSearchedFlight ? this.getSearchedFlight[0].price : ""
    };
  },
  computed: {
    ...mapGetters(["getSearchedFlight"])
  },
  methods: {
    handleSubmit() {
      const paymentDetails = {
        personName: this.personName,
        cardNumber: this.cardNumber,
        expiry: this.expirationDate,
        cvc: this.cvc,
        amount: this.getSearchedFlight[0]?.price ?? 100
      };
      // try {
      //   const success = await this.$store.dispatch(
      //     "makePayement",
      //     paymentDetails
      //   );
      //   console.log(success);
      //   if (success) {
      //     this.downloadTicket();
      //   } else {
      //     console.log("payement failed");
      //     console.log(success);
      //   }
      // } catch (err) {
      //   console.log(err);
      // }

      this.downloadTicket();
    },

    getUserName() {
      let data = JSON.parse(localStorage.getItem("user"));
      return data.name;
    },
    async downloadTicket() {
      const downloadLink = document.createElement("a");
      const dataUrl = localStorage.getItem("my-div-image");
      downloadLink.download = "my-div-image.png";
      downloadLink.href = dataUrl;
      downloadLink.click();

      // function urltoFile(url, filename, mimeType) {
      //   return fetch(url)
      //     .then(function(res) {
      //       return res.arrayBuffer();
      //     })
      //     .then(function(buf) {
      //       return new File([buf], filename, { type: mimeType });
      //     });
      // }

      // axios
      //   .post(
      //     "http://127.0.0.1:8000/api/sendImage",
      //     { image: await urltoFile(dataUrl, 'ticket.png','image/png' ) },
      //     { header: {"Content-Type": "multipart/form-data"}}
      //   )
      //   .then(res => console.log(res));

      function urltoFile(url, filename, mimeType) {
        return fetch(url)
          .then(function(res) {
            return res.arrayBuffer();
          })
          .then(function(buf) {
            return new File([buf], filename, { type: mimeType });
          });
      }

      const formData = new FormData();
      const imageFile = await urltoFile(dataUrl, "ticket.png", "image/png");
      formData.append("image", imageFile, imageFile.name);

      axios
        .post("http://127.0.0.1:8000/api/sendImage", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.hero {
  width: 100%;
  background-image: url("../../assets/images/payement.jpg");
  position: relative;
  height: 100vh;
  padding-top: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

.card {
  width: 600px;
  margin: 150px auto;
  color: black;
  border-radius: 20 px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
p {
  margin: 0px;
}

.container1 .h8 {
  font-size: 30px;
  font-weight: 800;
  text-align: center;
}

.btn.btn-primary {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background-image: linear-gradient(
    to right,
    #77a1d3 0%,
    #79cbca 51%,
    #77a1d3 100%
  );
  border: none;
  transition: 0.5s;
  background-size: 200% auto;
}
.form-control {
  color: white;
  background-color: #223c60;
  border: 2px solid transparent;
  height: 60px;
  padding-left: 20px;
  vertical-align: middle;
}

.text {
  font-size: 14px;
  font-weight: 600;
}

::placeholder {
  font-size: 14px;
  font-weight: 600;
}
</style>