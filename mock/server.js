let http=require("http");
let fs=require("fs");
let url=require("url");

let slider=require("./slider");
console.log(slider)
//获取轮播图/slider 
http.createServer(function(req,res){
  // 解决跨域.设置头部可跨域
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
   res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.setHeader("X-Powered-By",' 3.2.1')
   if(req.method=="OPTIONS") return res.send();/*让options请求快速返回*/
   

   let {pathname,query}=url.parse(req.url);
   if(pathname=="/slider"){
      //说明请求的是/slider 接口
      res.setHeader("content-type","application/json;charset=utf8")
      res.end(JSON.stringify(slider)) //把数据返回
   }
}).listen(3002);


//用node 起服务,用cmd 打开这个js所在的目录,然后用 node server.js 回车
// 在浏览器中输入http://localhost:3008/slider  就可以看到接口数据