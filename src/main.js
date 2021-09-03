import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import $ from 'jquery'
window.jQuery = $
window.$ = $
// import api from './api' // 导入api接口
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

Vue.mixin(mixins)
Vue.config.productionTip = false
// Vue.prototype.$api = api // 将api挂载到vue的原型上
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
