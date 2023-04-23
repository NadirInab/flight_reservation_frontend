import { createStore } from "vuex";
import Flights from "../Api/Flight";
import User from "../Api/User";
import Ticket from "../Api/Ticket";
import Payement from "../Api/Payement";
import notyf from "../notyf";
import router from "../router/index";
import Flight from "../Api/Flight";


const store = createStore({
    state: {
        authUser: JSON.parse(localStorage.getItem("user")),
        isAdmin: false,
        users: [],
        tickets: [],
        flights: [],
        searchedFlights: [],
        showForm: false,
        showSignUp: true,
        showTicket: false,
        editedFlight: {}
    },
    getters: {
        // Toggling between signIn & signUp
        showSignUp: state => state.showSignUp,
        // when user Search for specifique flight .
        getSearchedFlight(state) {
            return state.searchedFlights;
        },
        // function to formate data to extract the : day & hour & munites, for the purpose to show it in ticket .
        formattedDate: state => {
            const date = new Date(state.searchedFlights[0].date);
            const month = date.toLocaleString("default", { month: "long" });
            const day = date.getDate();
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);
            const seconds = ("0" + date.getSeconds()).slice(-2);
            return `${month} ${day} ${hours} ${minutes}`;
        },
        // show tickets when user search for flights 
        showTicket: state => state.showTicket,
        isAdmin: state => {
            return state.isAdmin;
        },

        getFlightImage(state) {
            // let images = state.flights.slice((state.flights.length - 1), state.flights.length).map(flight => `http://localhost:8000/images/${flight.from_image}`);
            // let images = state.flights.map(flight => `http://localhost:8000/images/${flight.from_image}`);
            let images = [...new Set(state.flights.map(flight => `http://localhost:8000/images/${flight.from_image}`))];

            return images;
        }
    },
    mutations: {
        // set Flights data coming from an api to my state array .
        setFlightsData(state, data) {
            state.flights = data
        },
        // add new add flight to table ;
        addFlightTable(state, data) {
            state.flights.push(data);
        },
        // remove deleted flight from table
        removeFlightTable(state, id) {
            state.flights = state.flights.filter((flight) => {
                return flight.id !== id;
            })
        },
        // edit flight data .
        setEditeFlight(state, data) {
            state.editedFlight = data
        }
        ,
        // search for flights
        searchedFlights(state, data) {
            state.searchedFlights = data;
        },

        // Toggle between signIn and signUp .
        showSignUp(state) {
            state.showSignUp = !state.showSignUp
        },
        showTicket(state) {
            state.showTicket = true;
        },
        // set Message error ;
        setMessageErr(state, err) {
            state.signUpInErr = err
        },

        // Admin routes : 
        // amdin dashboard contains list of users, so I set list of users comming for the db in state .
        setUsers(state, data) {
            state.users = data
        },
        // check if user is Admin .
        setAdmin(state, data) {
            state.isAdmin = data;
        },
        // clear local storage when user signs out .
        outUser(state, data) {
            state.authUser = data
        },
        // on of admin functionalities is delete a user .
        removeUserFromTable(state, id) {
            state.users = state.users.filter(user => {
                return user.id !== id;
            })
        },
        // set Ticket  data in the state .
        setTicket(state, data) {
            state.tickets = data
        },
        removeTicketFromTbale(state, id) {
            state.tickets = state.tickets.filter(ticket => ticket.id !== id);
        }
    },
    actions: {
        // fetch all flight : 
        flightData({ commit }) {
            Flights.all()
                .then(res => {
                    commit('setFlightsData', res.data);
                })
        },

        // get Flight by departure and arrival and date =: 
        getFlightDataFromTo({ commit }, data) {
            Flights.getFromTo(data)
                .then(res => {
                    if (res.data.length !== 0) {
                        commit('searchedFlights', res.data);
                        commit('showTicket');
                    } else {
                        notyf.open({
                            type: 'flight',
                            message: 'No Flights are available !!'
                        });
                    }
                })
        },

        // =========> Here flight crud beggins ;
        // Handle SignIn and Sign Up ,
        addFlight({ commit }, flightData) {

            Flights.add(flightData)
                .then(response => {
                    commit('addFlightTable', response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        // search for flight
        searchForFlight({ commit }, date) {
            Flights.search(date).then(res => {
                console.log(res.data.length);
                if (res.data.length !== 0) {
                    commit('setFlightsData', res.data);
                } else {
                    notyf.open({
                        type: 'flight',
                        message: 'No Flights are available !!'
                    });
                }

            }).catch(err => {
                console.log(err)
            })
        }
        ,
        // delete flight
        removeFlightFromDb({ commit }, id) {
            Flights.remove(id)
                .then(response => {
                    notyf.open({
                        type: 'user',
                        message: 'Flight Deleted Successfully'
                    });
                    commit('removeFlightTable', response.data[0].id);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        // edit flight
        editFlightData({ commit }, id) {
            console.log(id);
            Flights.show(id).then(res => {
                commit("setEditeFlight", res.data[0])
                console.log(res.data[0])
            }).catch(err => {
                console.log(err);
            })
        },
        // updated flight 
        // updatedflightTable({ commit }, id) {
        //     console.log(id) ;
        //     flight.get($id).then(res => {
        //         console.log(res.data)
        //     }).catch(err => {
        //         console.log(err) ;
        //     })
        // },

        // Admin 
        // query all the user in the db
        getUsers({ commit }) {
            User.all()
                .then(res => {
                    commit('setUsers', res.data.users);
                }).catch(err => {
                    console.log(err.res.data);
                })
        },
        // delete user .
        removeUserFromDb({ commit }, id) {
            User.remove(id)
                .then(response => {
                    if (response.status === 200) {
                        commit('removeUserFromTable', response.data.user.id);
                        notyf.open({
                            type: 'user',
                            message: 'User Deleted Successfully'
                        });
                    }
                })
                .catch(error => {
                });
        },

        //search for user 
        search({ commit }, name) {
            User.search(name)
                .then(res => {
                    commit("setUsers", res.data.user);
                })
                .catch(err => {
                    console.log(err);
                })
        },

        //  Tikcet : 
        bookTicket({ commit }, ticketData) {
            Ticket.add(ticketData)
                .then(res => {
                    // console.log(res.data);
                }).catch(error => {
                    console.log(error.response.data);
                });
        },

        getTickets({ commit }) {
            Ticket.all()
                .then(res => {
                    commit("setTicket", res.data);
                }).catch(error => {
                    console.log(error);
                })
        },
        removeTicketFromDb({ commit }, id) {
            Ticket.remove(id)
                .then(res => {
                    notyf.open({
                        type: 'user',
                        message: 'Ticket Deleted Successfully'
                    });
                    commit('removeTicketFromTbale', res.data.ticket.id);
                })
                .catch(err => {
                    console.log(err);
                })
        },

        // Make Payements : 
        makePayement({ commit, dispatch }, payementDetails) {
            dispatch("storePayment", payementDetails);
            Payement.add(payementDetails).then(res => {
                if (res.data.response === 'succeeded') {
                    dispatch("storePayment", payementDetails.amount);
                    let data = JSON.parse(localStorage.getItem('ticketData'));
                    let ticketData = { flight_id: data.flight_id, user_id: data.user_id, payement_id: localStorage.getItem('payementId') };
                    dispatch('bookTicket', ticketData);
                    notyf.open({
                        type: 'info',
                        message: 'Payment is successfully done'
                    });
                    return true
                } else {
                    notyf.open({
                        type: 'error',
                        message: 'Please Recheck Payment Details.'
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        },
        // send payament details to db .
        storePayment({ commit }, payementDetails) {
            Payement.send(payementDetails.amount)
                .then(res => {
                    localStorage.setItem('payementId', res.data.payment.id)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        // Sign Up :
        SignUp({ commit }, data) {
            User.add(data)
                .then(response => {
                    localStorage.setItem("auth_token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    notyf.open({
                        type: 'info',
                        message: 'Account is successfullu created'
                    });
                })
                .catch(err => {
                    notyf.error("Passwords are not well matched")
                })
        },
        SignIn({ commit }, data) {
            User.logIn(data)
                .then(response => {
                    localStorage.setItem("auth_token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    if (response.data.role === "admin") {
                        router.push("/admin");
                    } else {
                        router.push("/home");
                        // this.$router.go();
                    }
                }).catch(err => {
                    notyf.error(err)
                }
                )
        },
        // sign Out
        SignOut({ commit }) {
            localStorage.clear();
            commit('outUser', null);
            window.location.reload();
        },
    },
    modules: {

    }
})

export default store;