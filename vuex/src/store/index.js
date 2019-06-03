import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: '',
    number: null,
  },
  getters: {
    reverseName(state) {
      let localName = state.name
      return localName.split("").reverse().join("")
    }
  },
  mutations:{
    setName(state,name){
     state.name = name
   },
   setNumber(state, number) {
     state.number = number
   }
  },
  actions: {
    getNumber(context){
      axios.get('https://www.easy-mock.com/mock/5cd03a89e97f9709cf42a9dc/test/orders')
           .then(res=>{
            let result =  res.data.data
                let number = result[0].order_number
            context.commit('setNumber', number)
           })
    }

  }
})

export default store
