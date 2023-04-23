<template>
  <div class="container bg-white">
    <Stats />
    <table>
      <thead>
        <tr>
          <th></th>
          <th>User Name</th>
          <th>Flight Name</th>
          <th>Payement_id</th>
          <th>amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ticket, index) in this.tickets" :key="index">
          <td>{{index+1}}</td>
          <td>{{ ticket.user.name }}</td>
          <td>{{ ticket.flight.flight_name }}</td>
          <!-- <td>{{ ticket.payment.id }}</td> -->
          <!-- <td>{{ ticket.payment.amount }} DH</td> -->
          <td>
            <i @click="deleteTicket(ticket.id)" class="fa-sharp fa-solid fa-trash mx-1 text-danger"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Stats from "./Statistics.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["tickets"])
  },
  mounted() {
    this.$store.dispatch("getTickets");
    console.log(this.tickets) ;
  },
  components: {
    Stats
  },
  methods: {
    deleteTicket(id) {
      this.$store.dispatch("removeTicketFromDb", id);
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
td i {
  cursor: pointer;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.search-input {
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  width: 200px;
}

.search-input:focus {
  border-color: #007bff;
  outline: none;
}

@media only screen and (max-width: 600px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  th {
    text-align: center;
    padding: 10px;
  }

  td {
    text-align: center;
    padding: 10px;
    border: none;
    position: relative;
    padding-left: 50%;
  }
  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type(1):before {
    content: "ID:";
  }
  td:nth-of-type(2):before {
    content: "Name:";
  }
  td:nth-of-type(3):before {
    content: "Email:";
  }
  td:nth-of-type(4):before {
    content: "Tickets:";
  }
}
</style>