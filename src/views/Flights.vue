<template>
    <section>
        <FlightForm />
    </section>
</template>

<script>
import Flight from "../components/Flight.vue" ;
import FlightForm from "../components/admin/FlightForm.vue"
export default {
    data(){
        return {

        }
    }, 
    components : {
        Flight, 
        FlightForm

    }
}
</script>

<style>

</style>