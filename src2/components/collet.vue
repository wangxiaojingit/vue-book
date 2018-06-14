<template>
 <div>
     <MyHead>收藏页</MyHead>
        <div class="main" ref="scroll" >
            <ul >
              <li v-for="(item,key) in cartDat" :key="key">
                  <div class="left">
                      <img :src="item.cover" alt="">
                  </div>
                  <div class="right">
                      <button>+</button>
                      <div>数量:</div>
                      <button></button>
                  </div>
              </li>
            </ul>
        </div> 
     </div>
</template>
<script>
import MyHead from "../base/myhead.vue";
import List from "../base/bookList.vue";

export default {
    created(){
        console.log(this.$store.state.cartData)
    },
    computed:{
        cartDat(){
          return  this.$store.state.cartData
        }
    },
    data(){
        return {
          hot:[]
        }
    },
    components:{
        MyHead
       
        
    }
}
</script>
<style scoped lang="less">
   .main{
       position:absolute;
       top:50px;
       bottom:60px;
       left:0;
       right:0;
       overflow: auto;
       .loading{
           width:100%;
           height:50px;
           line-height:50px;
           text-align:center;
           color:#fff;
           background:green;
       }
       
   }

</style>