<template>
  <div class="text-center mb-3"> 
      <div class="btn-group text-center" >
        <button @click="filtrar('Americas')" class="btn btn-secondary">AM</button>
        <button @click="filtrar('Europe')" class="btn btn-secondary">EU</button>
        <button @click="filtrar('Asia')" class="btn btn-secondary">AS</button>
        <button @click="filtrar('Oceania')" class="btn btn-secondary">OC</button>
        <button @click="filtrar('Africa')" class="btn btn-secondary">AF</button>
        <button @click="filtrar('')" class="btn btn-secondary">ALL</button>
      </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup(){

    const store = useStore();

    const filtrar = (continente) =>{
      store.dispatch('filtrarContinente', continente)
    }

    return { filtrar }

    return
  }

}
</script>

<style>

</style>