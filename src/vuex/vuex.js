import Vuex from "vuex";
import Vue from "vue";
import logger from"vuex/dist/logger.js" //logger 是一个日志插件
import {mutations} from "./mutations.js"
Vue.use(Vuex);
const getters={
      val(state){
        return  state.count%2?"奇数":"偶数"
      }
}
const state={
  count:0
};

export const store=new Vuex.Store({
        plugins:[logger()], //执行logger,可以打印出每次state 的状态值
        strict:true,//开启严格模式,状态改变,只能通过提交mution,直接修改state 会报错
        state,
        mutations,
        getters
})

