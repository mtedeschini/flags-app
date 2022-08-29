<template>
    <div class="card mb-5">
        <h4  class="text-center py-3 m-0 card-title fw-bold">{{pais.name.common}}</h4>
        <img class="card-img-top img-fluid" :src="pais.flags[0]" :alt="`bandera-${pais.name.common}`">
        <div class="card-body" style="background-color: #dee2e6">
              <span class="badge bg-secondary d-block mb-1">Nombre Oficial: {{pais.name.official}}</span>
            <span class="badge bg-dark d-block mb-1 p-3">Population: {{numFormat(pais.population)}}</span>
            <span class="badge bg-secondary d-block mb-1">Zona Horaria: {{pais.timezones[0]}}</span>
            <span class="badge bg-secondary d-block mb-1">Continente: {{pais.region}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['pais'],
    setup(){

        const numFormat = (num) => num.toLocaleString('es-AR');
    
    return {numFormat}
    
    }
}
</script>

<style>

</style>