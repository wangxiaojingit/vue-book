<template>
 <div>
     <MyHead :back="false" >首页</MyHead>
     <div class="main">
         <div id="loadWraper" v-if="loadFlag">
             <Loading></Loading> 
         </div>
        
        <template v-else>
         <div class="bannerWrap">
            <Banner :swiperSlides="banner"></Banner>
        </div>
        <h3>热门推荐</h3>
        <Booklist :hot="hot"></Booklist> 


        </template>
     </div>
    
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue"
import Banner from "../base/banner.vue"
import Loading from "../base/loading.vue"
import Booklist from "../base/bookList.vue"
//import { getBanner , getDoor} from "../api/index.js"
import {getHome} from "../api/index.js"

 export default{
      created(){

         window.setTimeout(()=>{
           this.getData();
         },2000) 
         
    //    this.getBannerFn();
    //    this.getDor();
     },
     data(){
         return {
           banner:[],
           hot:[],
           loadFlag:true
         }
     },
     methods:{
        async getData(){
          let [{data:banner},{data:hot}]=  await getHome();
          this.banner=banner;
          this.hot=hot;
         
          this.loadFlag=false;
         }
    //   async getBannerFn(){
    //    let {data:banner} = await getBanner();
    //     this.banner=banner
    //    },
    //   async getDor(){
    //     let {data:hot} = await getDoor();
    //     this.hot=hot
    //    }
     },
     components:{
         MyHead,Banner,Booklist,Loading
     }
 }
</script>
<style scoped lang="less" >

.main{
     position:absolute; 
     left:0px;
     top:50px;
     bottom:60px;
     right:0px;
     overflow: auto;
     
     #loadWraper{
         position: absolute;
         left:50%;
         top:40%;
         transform: translate(-50%,-50%);
         -webkit-transform: translate(-50%,-50%);
     }
     h3{
         margin:10px 0;
     }
}
 .bannerWrap{
     width:100%;
 }
</style>
