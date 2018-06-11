

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