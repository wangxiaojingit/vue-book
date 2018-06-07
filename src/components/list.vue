<template>
 <div>
     <MyHead>列表页</MyHead>
     <div class="main">
         <List :hot="lists" v-if="lists.length">
             <span class="removebtn" slot="removestr" @click="removefn">删除</span>
         </List>
     </div>
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue" ;
import {listAll} from "../api/index.js";
import List from "../base/bookList.vue";

export default {
    created(){
      this.listAllfn();
    },
    computed:{
        
    },
    data(){
        return {
           lists:[],
           
        }
    },
    methods:{
       async  listAllfn(){
         let  {data:lists}=await listAll();
         console.log(lists)
           this.lists = lists
        },
        removefn(){
            alert(1)
        }
    },
    components:{
        MyHead,List
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

       .removebtn{
         padding:5px 15px;
         border-radius:5px;
         background: rgb(255, 123, 0);
         font-size: 12px;
         display: inline-block;
         color:#fff;
       }
   }
</style>