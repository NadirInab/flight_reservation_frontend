import Api from "./Api" ;

const END_POINT = "charge"
export default {
    add(payementDetails){
        return Api.post(END_POINT, payementDetails) ;
    }, 
    send(amount){
        return Api.post(`${END_POINT}/store`,{amount}) ;
    }
}