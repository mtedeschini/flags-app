<template>
  <input @keyup="procesarInput" 
  v-model="texto" 
  type="text" 
  class="form-control" 
  placeholder="Ingrese País"
  >
  <p 
    v-if="msg"
    class="my-3 text-center"
    >No se encontraron resultados </p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore();

        const texto = ref('')
        const msg = ref(false)

        const procesarInput = () => {
            store.dispatch('filtrarInput', texto.value)
            msg.value = store.state.paisesFiltrados.length === 0 ? true : false;
         }

        return { texto, procesarInput, msg }
    }

}
</script>

<style>

</style>