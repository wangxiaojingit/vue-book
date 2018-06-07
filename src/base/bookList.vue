<template>
    <div id="recomment">
        <ul class="clearfix">
            <li v-for="(item ,index ) in hot" :key="index">
                <div class="imgbox">
                  <img :src="item.cover" alt="">
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">{{item.price | pricefilter}}</div>
                <slot name="removestr" ></slot>
            </li>
        </ul>
    </div>    
</template>
<script>
  export default {
      props:{
         
          hot:{
              type:Array,
              default:[]
          }
      },
      filters:{
          pricefilter(val){
             return "¥ "+val;
          }
      },
      data(){
          return {

          }
      },
      methods:{
          
      }
  }
</script>
<style scoped lang="less">
#recomment{
    width:100%;
    padding:10px;
    box-sizing: border-box;
  ul{
      width:100%;
      li{
        width:50%;
        float:left;
        margin-bottom:10px;
        overflow:hidden;
        .imgbox{
            width:100%;
            height:120px;
            overflow:hidden;
            
            img{
            width:80%;
            }
        }
        .name,.price{
            height:20px;
            font-size:14px;
            line-height:20px;
            
        }
        .price{
            color:red;
        }
        
      }
  }
}
</style>