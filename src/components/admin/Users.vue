<template>
  <div class="container pt-4 mt-4">
    <div class="d-flex justify-content-between w-100">
      <h3>Users</h3>
      <input type="search" placeholder="Search..." class="search-input mx-2" />
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Tickets</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Smith</td>
          <td>john@example.com</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
          <td>jane@example.com</td>
          <td>3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob Johnson</td>
          <td>bob@example.com</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
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