<template>
  <div class="container bg-white">
     <Stats />
    <div class="d-flex ">
      <input
        @change="filteredUsers"
        type="search"
        placeholder="Search..."
        v-model="searchQuery"
        class="search-input mx-2 mb-3"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th>ID  </th>
          <th>Name</th>
          <th>Email</th>
          <th>Tickets</th>
          <th>role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in this.users" :key="index">
          <td>{{index+1}}</td>
          <!-- <td><Avatar /></td> -->
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.tickets_count }}</td>
          <td>{{user.roles[0] && user.roles[0].name }}</td>
          <td>
            <i @click="deleteUser(user.id)" class="fa-sharp fa-solid fa-trash mx-1 text-danger"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Avatar from "../Cards/Avatar.vue" ;
import Stats from "./Statistics.vue" ;

export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  components : {
    Avatar, 
    Stats
  },
  computed: {
    ...mapActions(["getUsers", "removeUserFromDb"]),
    ...mapState(["users"])
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    filteredUsers() {
      console.log(this.searchQuery);
    },
    
    deleteUser(id) {
      this.$store.dispatch("removeUserFromDb", id) ;
      // this.removeUserFromDb(id);
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 96%;
}

th,
td {
  padding: 8px;
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

  /* Add a title for each row */
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