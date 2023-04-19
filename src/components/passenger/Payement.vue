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
              <input v-model="cvv" class="form-control mb-3 pt-2" type="text" placeholder="123" />
            </div>
          </div>
          <div class="col-12">
            <div @click="handleSubmit" class="btn btn-primary mb-3">
              <span
                v-if="getSearchedFlight"
                class="ps-3 fw-bold"
              >{{getSearchedFlight[0] && getSearchedFlight[0].price}} MAD</span>
              <!-- <input type="hidden" v-model="amount" > -->
              <!-- <span v-if="getSearchedFlight" class="ps-3 fw-bold">300 MAD</span> -->
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
export default {
  data() {
    return {
      personName: this.getUserName(),
      cardNumber: "",
      expirationDate: "",
      cvv: "",
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
        cvv: this.cvv,
        amount: 20000
      };
      // console.log(paymentDetails);
      this.$store.dispatch("makePayement", paymentDetails);

      // let amount = { nbrTicket: 3, amount: this.amount };
      // this.$store.dispatch("storePayment", amount);
      // this.$store.dispatch("bookTicket", ticketData);

      // =====================downlaod ticket :
      // this.downloadTicket() ;
    },
    getUserName() {
      let data = JSON.parse(localStorage.getItem("user"));
      return data.name;
    },
    getTicketData() {
      let flight = JSON.parse(localStorage.getItem("ticketData"));
      let payment = JSON.parse(localStorage.getItem("paymentId"));
      return { flight, payment };
    },
    downloadTicket() {
      const savedDataUrl = localStorage.getItem("myDivImage");
      const savedImage = document.querySelector("#saved-image");
      savedImage.src = savedDataUrl;
      const downloadLink = document.createElement("a");
      downloadLink.download = "saved-image.png";
      downloadLink.href = savedDataUrl;
      downloadLink.click();
    }
  },
  mounted() {
    // const savedDataUrl = localStorage.getItem("myDivImage");
    // const savedImage = document.querySelector("#saved-image");
    // savedImage.src = savedDataUrl;
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