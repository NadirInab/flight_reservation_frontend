import Api from "./Api" ;

export default {
    all(){
        return Api.get("/users")
    }, 
    remove(id){
        return Api.delete(`/users/${id}`)
    }
}