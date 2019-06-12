import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

// 使用UI组件
import Vuetify from 'vuetify'
import VueQuillEditor from 'vue-quill-editor'
import router from './router/index'




// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader/

Vue.use(VueQuillEditor)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.config.productionTip = false

// let vm = new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el: '#app', //提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  router,
  store,
  render: function(createElement){
    // return createElement('h2', 'Hello Vue!');
    return createElement(App)
  }
})

