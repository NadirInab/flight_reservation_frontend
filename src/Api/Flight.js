import Api from "./Api" ;

export default {
    all(){
        return Api.get("/flights")
    }, 
    getFromTo(data){
        return Api.get(`flights/${data.from}/${data.to}/${data.date}`)
    }, 
    add(flightData){
        return Api.post("/flights", flightData)
    }, 
    remove(id){
        return Api.delete(`/flights/${id}`)
    }
}