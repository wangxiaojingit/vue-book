import Vue from 'vue'
import Router from 'vue-router'
let helloWorld =()=>import('../components/HelloWorld');
let Home=()=>import("../components/home.vue"); 
let List=()=>import("../components/list.vue"); 
let Detail=()=>import("../components/detail.vue")  
let Add=()=>import("../components/add.vue")  
let Collet=()=>import("../components/collet.vue")  


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
