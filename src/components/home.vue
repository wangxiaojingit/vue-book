<template>
 <div>
     <MyHead :back="false" >首页</MyHead>
     <div class="main">
        <div class="bannerWrap">
            <Banner :swiperSlides="banner"></Banner>
        </div>
        <h3>热门推荐</h3>
        <Booklist :hot="hot"></Booklist> 

     </div>
    
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue"
import Banner from "../base/banner.vue"
import Booklist from "../base/bookList.vue"
import { getBanner , getDoor} from "../api/index.js"
 export default{
      created(){
       
       this.getBannerFn();
       this.getDor();
     },
     data(){
         return {
           banner:[],
           hot:[]
         }
     },
     methods:{
      async getBannerFn(){
       let {data:banner} = await getBanner();
        this.banner=banner
       },
      async getDor(){
        let {data:hot} = await getDoor();
        this.hot=hot
       }
     },
     components:{
         MyHead,Banner,Booklist
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
     h3{
         margin:10px 0;
     }
}
 .bannerWrap{
     width:100%;
     
 }
</style>
