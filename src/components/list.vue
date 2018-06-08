<template>
 <div>
     <MyHead>列表页</MyHead>
     <div class="main">
         <List :hot="lists" :rem="true" v-if="lists.length" @rem="changelists" >
            
         </List>
     </div>
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue" ;
import {listAll,deldor} from "../api/index.js";
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
        changelists(id){
            deldor(id);
            this.lists=this.lists.filter(function(item){
               return item.id!=id
            })
            
            
        },
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

       
   }
</style>