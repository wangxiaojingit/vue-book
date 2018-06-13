<template>
    <div id="footer">
        <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
        
        </router-link>
        <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表页</span>
        
        </router-link>
        <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>
        
        </router-link>
        <router-link to="/collet">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="less">
   #footer{
       width:100%;
       height:60px;
       line-height:60px;
       border-top:1px solid yellowgreen;
       display: flex;
       flex-direction: row;
       position:fixed;
       left:0;
       bottom:0px;

       a{
           flex:1;
           color:yellowgreen;
           flex-direction: column;
           align-items:center;
           justify-content: center;

       }
       a.router-link-active{
           color:darkcyan;
       }
   }
</style>


