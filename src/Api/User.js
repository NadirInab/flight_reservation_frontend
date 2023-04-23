import Api from "./Api";

const END_POINT = "users"
export default {
    all() {
        return Api.get(END_POINT)
    },
    add(data) {
        return Api.post("/register", data)
    },
    logIn(data) {
        return Api.post("/login", data)
    },
    remove(id) {
        return Api.delete(`${END_POINT}/${id}`)
    }, 
    search(name){
        return Api.get(`${END_POINT}/search/${name}`)
    }
}