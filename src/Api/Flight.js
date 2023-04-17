import Api from "./Api" ;

const END_POINT = "flights"
export default {
    all(){
        return Api.get(END_POINT)
    }, 
    show(id){
        return Api.get(`${END_POINT}/${id}`)
    },
    getFromTo(data){
        return Api.get(`${END_POINT}/${data.from_city}/${data.to_city}/${data.date}`)
    }, 
    add(flightData){
        return Api.post(END_POINT, flightData, {headers : {"Content-Type": "multipart/form-data" } })
    }, 
    update(id,data){
        return Api.put(`${END_POINT}/${id}`, data)
    },
    remove(id){
        return Api.delete(`${END_POINT}/${id}`)
    }
}