

### 合并ajax请求, 当页面的所有数据都加载完成之后再显示页面,
axios.all([])

### 缓存 <keep-alive>

有时候我们有的路由页面需要缓存,有的不需要,怎么实现需求?

1\ 在router下面的index.js 中,我们可以多一个选项进行设置

```
 {
      path:'/home',
      component:Home,
      meta:{  //单独设置路由上的页面是否被缓存
        keepAlive:true
      }    
 }

```
2 在App.vue 中我们需要根据路由中设置的缓存的参数进行判断

```
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" ></router-view>

```

3 我们启动服务在访问页面的时候,查看network 的时候只有一个app.js,把所有的请求都打包成一个
无论我们访问哪个页面,都是全部加载,为了优化,实现按需加载,我们看vue-router文档中的路由懒加载
中有一个按组件分块.在router下面的index.js
```
let helloWorld =()=>import('../components/HelloWorld');
let Home=()=>import("../components/home.vue"); 
let List=()=>import("../components/list.vue"); 
let Detail=()=>import("../components/detail.vue")  
let Add=()=>import("../components/add.vue")  
let Collet=()=>import("../components/collet.vue")  

```
这样我们在访问首页的时候,就只加载首页的,访问列表页的时候就加载列表页的请求
