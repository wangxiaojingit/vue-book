<template>
    <div id="recomment">
        <ul class="clearfix">
            <!-- <li v-for="(item ,index ) in hot" :key="index" @click="toDetail(item.id)">
                <div class="imgbox">
                  <img :src="item.cover" alt="">
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">{{item.price | pricefilter}}</div>
                <span class="removebtn" v-if="rem" @click="remove(item.id)">删除</span>
            </li> -->
             <router-link tag="li" 
             v-for="(item ,index ) in hot" 
             :key="index" 
            
             :to="{name:'detail',params:{id:item.id}}"
             >
                <div class="imgbox">
                  <img :src="item.cover" alt="">
                </div>
                <div class="name">{{item.name}}</div>
                <div class="price">{{item.price | pricefilter}}</div>
                <span class="removebtn" v-if="rem" @click="remove(item.id)">删除</span>
            </router-link>
        </ul>
    </div>    
</template>
<script>
  export default {
      props:{
          rem:{
              type:Boolean,
              default:false
          },
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
          remove(id){
              this.$emit("rem",id)
             // this.hot=this.hot.filter(item=>{item!=id});
          },
          toDetail(id){
            this.$router.push({path:`/detail/${id}`})
          // this.$router.push("/detail") 不带参数
          }
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
        .removebtn{
         padding:5px 15px;
         border-radius:5px;
         background: rgb(255, 123, 0);
         font-size: 12px;
         display: inline-block;
         color:#fff;
       }
      }
  }
}
</style>