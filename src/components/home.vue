<template>
 <div>
     <MyHead :back="false">首页</MyHead>
     <div class="bannerWrap">
        <Banner :swiperSlides="banner"></Banner>
     </div>
    
 </div>
</template>
<script>
import MyHead from "../base/myhead.vue"
import Banner from "../base/banner.vue"
import { getBanner , getDoor} from "../api/index.js"
 export default{
      created(){
       
       this.getBannerFn();
       this.getDor();
     },
     data(){
         return {
           banner:[]
         }
     },
     methods:{
      async getBannerFn(){
          debugger;
       let {data:banner} = await getBanner();
       
        this.banner=banner
       },
      async getDor(){
        let {data:hot} = await getDoor();
        this.hot=hot
       }
     },
     components:{
         MyHead,Banner
     }
 }
</script>
<style scoped lang="less" >
 .bannerWrap{
     
     position:absolute;
     left:0px;
     top:50px;
     bottom:60px;
     right:0px;
 }
</style>
