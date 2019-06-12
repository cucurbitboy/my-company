import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:1
    },
    getters: {
        getcount: state => {
            return state.count +1
        }
    },
    mutations: {
        add(state, n){
            state.count = state.count + n
        },
        remove(state){
            state.count = state.count -1
        }
    },
    actions: {
        addFun(context, n){
            context.commit("add", n)
        },
        removeFun(context) {
            context.commit("remove")
        }
    }
})

export default store