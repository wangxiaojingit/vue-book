document.body.innerHTML="hello"

//vuex 只为大型项目,只能用在vue 中
//将数据统一管理

import Vue from "vue";
import Vuex from "vuex";
import App from "./components/app.vue";
console.log(App)
Vue.use(Vuex);
new Vue({
    el:"#app",

})