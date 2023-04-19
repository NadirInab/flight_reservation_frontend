import Api from "./Api";

const END_POINT = "tickets"
export default {
    all() {
        return Api.get(END_POINT);
    },
    add(ticketData) {
        return Api.post(END_POINT, ticketData)
    },
    remove(id) {
        return Api.delete(`${END_POINT}/${id}`)
    }
}