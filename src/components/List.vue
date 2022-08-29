<template>
  <div class="row mt-4 d-flex justify-content-center" >
        <div class="col-md-6 col-12">
          <div v-for="(pais) in paises" :key="pais.name.common">
            <Card :pais="pais"/>
          </div>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'

export default {
  components: {
    Card,
  },
  setup(){
    
    const store = useStore();
    const paises = computed(() => {
      return store.getters.ordenarPaisesPoblacion;
    })
    onMounted(async () => {
      //PARA TRAER ACTIONS ES A TRAVES DE DISPATCH
      await store.dispatch('getPaises')
      await store.dispatch('filtrarInput', '')
    })

    return {paises}
  }

}
</script>

<style>

</style>