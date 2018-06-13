

//vuex 只为大型项目,只能用在vue 中
//将数据统一管理

import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import logger from"vuex/dist/logger.js" //logger 是一个日志插件

Vue.use(Vuex);
const state={
  count:0
};
const mutations={
   add(state,n){
     state.count+=n;
   },
   reduce(state,n){
     state.count-=n;
   }
}
const store=new Vuex.Store({
        plugins:[logger()], //执行logger,可以打印出每次state 的状态值
        strict:true,//开启严格模式,状态改变,只能通过提交mution,直接修改state 会报错
       state,
       mutations
})

new Vue({
    el:'#app',
    data:{
      msg:"hello"
    },
    
    components: { App },
    template: '<App/>',
    store 
})