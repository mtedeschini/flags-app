<template>
<main>
  <div class="container">
    <Titulo size="1" text="Paises API"/>
    <Titulo size="4" text="Filtrar por Continentes"/>
    <Btn />
    <Buscador />
    <List />
    
  </div>
  </main>
</template>



<script>
import List from './components/List.vue'
import Titulo from './components/Titulo.vue'
import Buscador from './components/Buscador.vue'
import Btn from './components/Btn.vue'
import { useStore } from 'vuex'
import { ref } from '@vue/reactivity'
export default {
  name: 'App',
  components: {
    Titulo,
    List,
    Btn,
    Buscador
  },
}
</script>

<style>
</style>
