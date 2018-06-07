
import axios from "axios";
axios.defaults.baseURL="http://localhost:30002" //增加默认的请求路径
//请求banner 图片接口
let bathUrl="http://localhost:8000";
//返回的是一个promise 对象
export let getBanner=function(){
    return axios.get(bathUrl+"/slider");
}
// 请求热门推荐
export let getDoor=function(){
    return axios.get(bathUrl+"/hot")
}
//请求列表
export let listAll=function(){
    return axios.get(bathUrl+"/alllist")
}