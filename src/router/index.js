import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/home.vue"
import List from "../components/list.vue"
import Detail from "../components/detail.vue"
import Add from "../components/add.vue"
import Collet from "../components/collet.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },{
      path:'/home',
      component:Home,
      meta:{  //单独设置路由上的页面是否被缓存
        keepAlive:true
      }
    },
    {
      path:'/list',
      component:List,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/detail/:id',
      component:Detail,
      name:"detail"
    },
    {
      path:'/add',
      component:Add
    },
    {
      path:'/collet',
      component:Collet
    },
    {
      path:'*',
      redirect:"/home"
     
    }
  ]
})
