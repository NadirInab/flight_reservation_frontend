import { createStore } from "vuex";
import axios from "axios";
import Flights from "../Api/Flight";
import User from "../Api/User";


const store = createStore({
    state: {
        authUser : JSON.parse(localStorage.getItem("data")),
        isAdmin : false,
        users : [],
        showSignUp: true,
        showTicket: false,
        flights: [],
        searchedFlights: [],
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
        isAdmin : state => state.isAdmin, 
        getFlightImage(state){
            let images = state.flights.slice((state.flights.length - 7), state.flights.length).map(flight => `http://localhost:8000/images/${flight.from_image}`) ;
            let from_city = state.flights.slice((state.flights.length -15), state.flights.length).map(flight => flight.from_city) ;
            return images  ;
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
        updatedflightTable(state, id) {
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

        // Admin routes : 
        setUsers(state, data){
            state.users = data
        }, 
        outUser(state, data){
            state.authUser = data
        }, 
        removeUserFromTable(state, id) {
            state.users = state.users.filter((user) => {
                return user.id !== id;
            })
        },
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
                    commit('searchedFlights', res.data);
                    commit('showTicket');
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
                    console.log(error.response.data);
                });
        },
        removeFlightFromDb({ commit }, id) {
            Flights.remove(id)
                .then(response => {
                    commit('removeFlightTable', response.data[0].id);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
        editFlightData({ commit }, id) {
            axios.put(`http://127.0.0.1:8000/api/flights/${id}`)
                .then(response => {
    
                })
        }, 

        // Admin 
        getUsers({commit}){
            User.all()
            .then(res => {
                console.log(res.data.users)
                commit('setUsers', res.data.users) ;
            }).catch(err => {
                console.log(err.res.data) ;
            })
        }, 
        getUser(){
            let user = JSON.parse(localStorage.getItem("data")) ;
            console.log(user) ;
        },
        removeUserFromDb({ commit }, id) {
            console.log(typeof(id)) ;
            // User.remove(id)
            //     .then(response => {
            //         commit('removeUserFromTable', response.data[0].id);
            //     })
            //     .catch(error => {
            //         console.log(error.response.data);
            //     });
        },

        // sign Out
        SignOut({ commit }) {
            localStorage.clear() ;
            commit('outUser', null);
          },
    },
    modules: {

    }
})

export default store;