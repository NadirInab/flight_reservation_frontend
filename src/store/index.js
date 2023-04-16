import { createStore } from "vuex";
import axios from "axios";
import Flights from "../Api/Flight";
import User from "../Api/User";
import Ticket from "../Api/Ticket";
import notyf from "../notyf";
import router from "../router/index" ;


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
        showSignUp: state => state.showSignUp,
        getSearchedFlight(state) {
            return state.searchedFlights;
        },
        formattedDate: state => {
            const date = new Date(state.searchedFlights[0].date);
            const month = date.toLocaleString("default", { month: "long" });
            const day = date.getDate();
            const hours = ("0" + date.getHours()).slice(-2);
            const minutes = ("0" + date.getMinutes()).slice(-2);
            const seconds = ("0" + date.getSeconds()).slice(-2);
            return `${month} ${day} ${hours} ${minutes}`;
        },
        showTicket: state => state.showTicket,
        isAdmin: state => state.isAdmin,
        getFlightImage(state) {
            let images = state.flights.slice((state.flights.length - 7), state.flights.length).map(flight => `http://localhost:8000/images/${flight.from_image}`);
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
        setEditeFlight(state, data){
            state.editedFlight = data
        }
        ,
        // search for flights
        searchedFlights(state, data) {
            state.searchedFlights = data;
            // console.log(state.searchedFlights)
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
        setUsers(state, data) {
            state.users = data
        },
        isAdmin(state) {
            state.isAdmin = !state.isAdmin;
        }
        ,
        outUser(state, data) {
            state.authUser = data
        },
        removeUserFromTable(state, id) {
            state.users = state.users.filter(user => {
                return user.id !== id;
            })
        },

        //Ticket 
        setTicket(state, data) {
            state.tickets = data
        }
    },
    actions: {
        // fetch all flight : 
        flightData({ commit }) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            Flights.all(config)
                .then(res => {
                    commit('setFlightsData', res.data);
                })
        },

        // get Flight by departure and arrival and date =: 
        getFlightDataFromTo({ commit }, data) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            Flights.getFromTo(data, config)
                .then(res => {
                    console.log(res.data);
                    commit('searchedFlights', res.data);
                    commit('showTicket');
                })
        },

        // =========> Here flight crud beggins ;
        // Handle SignIn and Sign Up ,
        addFlight({ commit }, flightData) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            Flights.add(flightData, config)
                .then(response => {
                    commit('addFlightTable', response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        removeFlightFromDb({ commit }, id) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            console.log(token) ;
            console.log(config) ;
            Flights.remove(id, config)
                .then(response => {
                    console.log(response) ;
                    commit('removeFlightTable', response.data[0].id);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        editFlightData({ commit }, id) {
            console.log(id) ;
            Flights.show(id).then(res => {
                commit("setEditeFlight", res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err) ;
            })
        },
        // updatedflightTable({ commit }, id) {
        //     console.log(id) ;
        //     flight.get($id).then(res => {
        //         console.log(res.data)
        //     }).catch(err => {
        //         console.log(err) ;
        //     })
        // },

        // Admin 
        getUsers({ commit }) {
            User.all()
                .then(res => {
                    commit('setUsers', res.data.users);
                }).catch(err => {
                    console.log(err.res.data);
                })
        },
        getUser() {
            let user = JSON.parse(localStorage.getItem("data"));
            console.log(user);
        },
        removeUserFromDb({ commit }, id) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            User.remove(id, config)
                .then(response => {
                    console.log(response.data)
                    commit('removeUserFromTable', response.data[0].id);
                })
                .catch(error => {
                    // console.log(error.response.data);
                });
        },

        //  Tikcet : 
        bookTicket({ commit }, ticketData) {
            Ticket.add(ticketData)
                .then(res => {
                    console.log(res.data);
                }).catch(error => {
                    console.log(error.response.data);
                });
        },

        getTickets({ commit }) {
            const token = localStorage.getItem('auth_token');
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            Ticket.all(config)
                .then(res => {
                    console.log(res.data) ;
                    commit("setTicket", res.data);
                }).catch(error => {
                    console.log(error);
                })
        },

        // Sign Up :
        SignUp({ commit }, data) {
            User.add(data)
                .then(response => {
                    console.log(response);
                    localStorage.setItem("auth_token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    // commit("isAdmin") ;
                    notyf.open({
                        type: 'info',
                        message: 'Account is successfullu created'
                    });
                })
                .catch(err => {
                    notyf.error(err.response.data.message)
                    // commit("setMessageErr", err.response.data.message) ;
                })
        },
        SignIn({ commit }, data) {
            User.logIn(data)
                .then(response => {
                    localStorage.setItem("auth_token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    if (response.data.role === "admin") {
                        commit("isAdmin");
                        router.push("/admin");
                        // window.reload() ;
                    } else {
                        console.log("not admin");
                        router.push("/home");
                        window.reload() ;

                    }
                }).catch(err => {
                    // commit("setMessageErr", err.response.data.message);
                    notyf.error(err.response.data.message)
                    // console.log(err.response.data.message);
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