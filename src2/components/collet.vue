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
                      <button class="btn" @click="addNum(item)">+</button>
                      <span class="num">{{item.num}}</span>
                      <button class="btn" @click="reduceNum(item)">-</button>
                      <button class="btn" @click="remcart(item)">删除</button>
                  </div>
              </li>
            </ul>
        </div> 
     </div>
</template>
<script>
import MyHead from "../base/myhead.vue";
import List from "../base/bookList.vue";
import * as Types from "../vuex/mutations_types.js"
export default {
    created(){
        debugger
       if(!this.$store.state.cartData.length){
          this.$router.push({path:"/list"})
         }  

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
    methods:{
        addNum(item){
            debugger;
           
            item.num++;
            this.$store.commit(Types.CHANGEDATA,item); //添加增加按钮的时候,需要改变当前数据的数量
            this.$store.commit(Types.CHANGECARTTOTAL); //修改购物车总数量
             this.$store.commit(Types.CARTFLAG); //修改购物车状态

        },
        reduceNum(item){
             item.num--;
            if(item.num<=0){
              item.num=1;
              return;
            }
            
            this.$store.commit(Types.CHANGEDATA,item);
            this.$store.commit(Types.CHANGECARTTOTAL); //修改购物车总数量
            this.$store.commit(Types.CARTFLAG); //修改购物车状态
        },
        remcart(item){
          //删除购物车中的某一项
            this.$store.commit(Types.DELETE,item);//删除购物车的某一项
            this.$store.commit(Types.CHANGECARTTOTAL); //修改购物车总数量
            this.$store.commit(Types.CARTFLAG); //修改购物车状态



        }

    },
    components:{
        MyHead
       
        
    }
}
</script>
<style scoped lang="less">
.btn{
    width:100px;
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:24px;
}
.num{
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:16px;
    color:green;
    margin:0 10px;
}
   .main{
       position:absolute;
       top:50px;
       bottom:60px;
       left:0;
       right:0;
       overflow: auto;
       ul{
               padding-top: 50px;
               li{
                   .left{
                       width:100%;
                       margin-bottom:50px;
                       
                   }
               }
       }
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