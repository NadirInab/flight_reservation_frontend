import { createStore } from "vuex";
import axios from "axios";


const store = createStore({
    state: {
        showSignUp: true,
        flights: [],
        searchedFlights: []
    },
    getters: {
        showSignUp: state => state.showSignUp
    },
    mutations: {
        setFlightsData(state, data) {
            state.flights = data
        },
        searchedFlights(state, data) {
            state.searchedFlights = data;
        }
    },
    actions: {
        flightData({ commit }) {
            axios("http://127.0.0.1:8000/api/flights")
                .then(res => {
                    console.log(res.data);
                    commit('setFlightsData', res.data);
                })
        },
        getFlightDataFromTo({ commit }, data) {
            console.log(data);
            axios(`http://17.0.0.1:8000/api/flights/from/${data.from}/to/${data.to}`)
                .then(res => {
                    console.log(res.data);
                    commit('searchedFlights', res.data);
                })
        }
    },
    modules: {

    }
})

export default store;