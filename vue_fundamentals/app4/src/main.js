import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
  state () {
    return {
      vux_count       : 10,
      vuex_otherdata  : 20
    }
  },

  // mutations going to update state directly
  mutations : {
    add_to_Count(state, payload) {
      state.vux_count += parseInt(payload)
    },
    deduct_to_count(state, payload) {
      state.vux_count -= parseInt(payload)
    },
  }
})

createApp(App).use(store).mount('#app')
