// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import swiperCSS from '../node_modules/swiper/dist/css/swiper.css'
import $ from '../node_modules/jquery/dist/jquery.min'

Vue.use(VueResource)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return  h(App)
  },
  store,
  $,
  swiperCSS
})
