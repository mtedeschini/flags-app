import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: [],
  },


  getters: {
    ordenarPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a, b) => b.population - a.population);
    },
    filtrarPaises(state){

    }
  },

  mutations: {
    setPaises(state, payload){
      state.paises = payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },


  actions: {
    async getPaises({commit}){
      try {
        const url = "https://restcountries.com/v3/all"
        const res = await fetch(url);
        const data = await res.json();
        commit('setPaises', data)

      } catch (error) {
          console.log(error)
      }
    },
    filtrarPor({commit, state}, continente){
      //const filtrado = state.paises.filter(pais => pais.region === continente)
      const filtrado = state.paises.filter(pais => pais.region.includes(continente))
      commit('setPaisesFiltrados', filtrado)
    },
    filtrarInput({commit, state}, texto){
      const filtrado = state.paises.filter(pais => pais.name.common.toLowerCase().includes(texto.toLowerCase()))
      commit('setPaisesFiltrados', filtrado)
    }
  },


})
