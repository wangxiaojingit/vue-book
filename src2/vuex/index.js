import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import logger from "vuex/dist/logger.js";
import {mutations} from "./mutations.js";

let state={
    cartData:[]
}
//getters 就相当于组件中的computed,不同的是computed 指的的组件中的,这个只的是公用数据中的
let getters={
    

}
 export default  new Vuex.Store({
        state,
        mutations,
        strict:true,//开启只能用mutations提交功能校验
        plugins:[logger()],
        getters 
  })