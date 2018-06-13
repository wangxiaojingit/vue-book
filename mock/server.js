let http=require("http");
let fs=require("fs");
let url=require("url");
let pageSize=5; //每页的调数
let slider=require("./slider");

 function read(url,cb){
   fs.readFile(url,"utf8",function(err,data){
       if(err||data.length==0){
        cb([])     
       }else{
         cb(JSON.parse(data))
       }
   })
 }

 function write(url,data,cb){
    fs.writeFile(url,JSON.stringify(data),cb)
 }
 
//获取轮播图/slider 
http.createServer(function(req,res){
  // 解决跨域.设置头部可跨域
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
   res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.setHeader("X-Powered-By",' 3.2.1')
   if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
   

   let {pathname,query}=url.parse(req.url,true);//true 把query 转换成对象
   if(pathname=="/slider"){
      //说明请求的是/slider 接口
      res.setHeader("content-type","application/json;charset=utf8")
      res.end(JSON.stringify(slider)) //把数据返回
      return;
   }
   if(pathname=="/hot"){
     //说明请求的是热门推荐
    
      read("./doo.json",function(data){
        res.setHeader("content-type","application/json;charset=utf8");
        res.end(JSON.stringify(data))
        return;
      })


    }
    if(pathname=="/page"){
       let start=parseInt(query.start)||0;//每次请求的起始条数index
       
       read("./doo.json",function(data){
          let hasMore=true;
          let result=data.slice(start,start+pageSize);//需要返回的数据
         
          if(data.length<=start+pageSize){
            hasMore=false;
          }
          res.setHeader("content-type","application/json;charset=utf8");
            setTimeout(function(){
              res.end(JSON.stringify({hasMore,dol:result}))
            },500)
            
         
         

       })
    }

    if(pathname=="/alllist"){ 
       let id=query.id;
       switch (req.method) {
          case "GET":
          if(id){
             //如果id存在就是查询
            read("./doo.json",function(data){
              let dol= data.find(item=>item.id==id);
              if(!dol){
                dol= {}
              }
              res.setHeader("content-type","application/json;charset=utf8");
              res.end(JSON.stringify(dol));
            }) 

          }else{
            //如果id 不存在就是查询所有
            //请求列表
              read("./doo.json",function(data){
                res.setHeader("content-type","application/json;charset=utf8");
                res.end(JSON.stringify(data))
                return;
              })

          }
          break;
          case "POST":
            let str="";
            req.on("data",trunk=>{
              str+=trunk;
            });
            req.on("end",()=>{
               //把添加的数据写入到数据库
               read("./doo.json",function(data){
                    str=JSON.parse(str)
                    str.id=data.length?data[data.length-1].id+1:1;
                    data.unshift(str);
                    write("./doo.json",data,function(){
                       //把添加的数据返回
                        res.end(JSON.stringify(str));
               
                    })
                    
               })
               //把读到的数据返回
            })
          
          break;
          case "PUT":
          if(id){
            let str="";
          
            req.on("data",trunk=>{
               str+=trunk;
            })
            req.on("end",()=>{
               let dor=JSON.parse(str);
               read("./doo.json",function(data){
                 let newData=  data.map(item=>{
                     if(item.id==id){
                       return dor
                     }else{
                       return item;
                     }
                  })
                  write("./doo.json",newData,function(){
                    res.end(JSON.stringify(newData))
                  })
               })
            })
          }
          break;
         
          case "DELETE": 
           
           //读那个文件,获取到数据之后过滤,然后重新写入文件
           read("./doo.json",function(data){
              let newData=data.filter((item)=>{return item.id!=id});
              write("./doo.json",data,function(err){
               
                 res.end(JSON.stringify({}));
              })
           })
          break;
       }
    }
    
    fs.stat("."+pathname,function(err,stats){
      if(err){
        //  res.statusCode=404;
        //  res.setHeader("content-type","application/json;charset=utf8");
        // res.end("not found")
      }else{
        if(stats.isDirectory()){
          let p=require("path").join("."+pathname,'./index.html');
          fs.createReadStream(p).pipe(res);
        }else{
          fs.createReadStream("."+pathname).pipe(res)
        }
      }
    })


  }).listen(8000);


//用node 起服务,用cmd 打开这个js所在的目录,然后用 node server.js 回车
// 在浏览器中输入http://localhost:3008/slider  就可以看到接口数据