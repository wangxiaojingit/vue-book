
import axios from "axios";
axios.defaults.baseURL="http://localhost:30002" //增加默认的请求路径
//请求banner 图片接口

//返回的是一个promise 对象
export let getBanner=function(){
    return axios.get("http://localhost:3002/slider")
}