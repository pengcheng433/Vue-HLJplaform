import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins';
import $ from 'jquery';
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
Vue.mixin(mixins);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
