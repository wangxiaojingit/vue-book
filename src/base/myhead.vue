<template>
    <div id="myhead">
       <i class="iconfont icon-fanhui" v-if="back"></i> <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
         back:{
             type:Boolean,
             default:false
         }
     },
}
</script>
<style scoped lang="less">
    #myhead{
        height:50px;
        border-bottom:1px solid yellowgreen;
        color:darkcyan;
        position:relative;
        line-height:50px;
        background:rgba(0,0,0,.8);
        i{
            position:absolute;
            left:10px;
            top:0px;


        }
    }
</style>


