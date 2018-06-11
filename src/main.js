// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)



//Vue.use(VueLazyload)
//懒加载 ,除此之外在页面上还需要把:src  改成v-lazy=
import VueLazyload from 'vue-lazyload';
import err from "./assets/error.jpg";
import load from "./assets/loading.gif";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: err,
  loading: load,
  attempt: 1,
  listenEvents:['scroll']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
