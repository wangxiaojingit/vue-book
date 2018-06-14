

//vuex 只为大型项目,只能用在vue 中
//将数据统一管理

import Vue from "vue";
import App from "./App.vue";
import {store} from "./vuex/vuex.js"
new Vue({
    el:'#app',
    data:{
      msg:"hello"
    },
    components: { App },
    template: '<App/>',
    store 
})