import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
    state: {
        showSignUp: true,
        showTicket : false,
        flights: [],
        searchedFlights: [],
    },
    getters: {
        showSignUp: state => state.showSignUp,
        getSearchedFlight: state => state.searchedFlights, 
        showTicket : state => state.showTicket

    },
    mutations: {
        // set Flights data coming from an api to my state array .
        setFlightsData(state, data) {
            state.flights = data
        },
        // add new add flight to table ;
        addFlightTable(state, data){
            state.flights.push(data) ;
        },
        // remove deleted flight from table
        removeFlightTable(state,id){
            state.flights = state.flights.filter((flight)=>{
                return flight.id !== id ;
            })
        },
        updatedflightTable(state, id){
            // state.flights = "updated"
            console.log("here updated mutation") ;
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
        showTicket(){
            // state.showTicket = true ;
        }
    },
    actions: {
        // fetch all flight : 
        flightData({ commit }) {
            axios("http://127.0.0.1:8000/api/flights")
                .then(res => {
                    console.log(res.data);
                    commit('setFlightsData', res.data);
                })
        },

        // get Flight by departure and arrival and date =: 
        getFlightDataFromTo({ commit }, data) {
            console.log("here store");
            console.log(data);
            axios(`http://127.0.0.1:8000/api/flights/${data.from}/${data.to}/${data.date}`)
                .then(res => {
                    commit('searchedFlights', res.data);
                    commit('showTicket', res.data) ;
                })
        },

        // =========> Here flight crud beggins ;
        // Handle SignIn and Sign Up ,
        addFlight({ commit }, flightData) {
            axios
                .post("http://127.0.0.1:8000/api/flights", flightData)
                .then(response => {
                    // console.log(response.data);
                    commit('addFlightTable', response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }, 
        removeFlightFromDb({ commit }, id) {
            axios
                .delete(`http://127.0.0.1:8000/api/flights/${id}`)
                .then(response => {
                    console.log(response.data[0]) ;
                    console.log(response.data[0].id);
                    commit('removeFlightTable', response.data[0].id);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }, 
        editFlightData({commit}, id){
            axios.put(`http://127.0.0.1:8000/api/flights/${id}`)
            .then(response => {
                console.log(id)
                // commit('updatedflightTable')
            })
        }
    },



    modules: {

    }
})

export default store;