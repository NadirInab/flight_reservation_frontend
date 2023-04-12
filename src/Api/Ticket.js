import Api from "./Api" ;

export default {
    all(){
        return Api.get("/tickets") ;
    },
    add(ticketData){
        return Api.post("/tickets", ticketData)
    }, 
    remove(id){
        return Api.delete(`/tickets/${id}`)
    }
}