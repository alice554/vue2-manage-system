// 通过导入axios库并自定义创建一个axios实例的方式，命名为service。
// 它的作用是统一处理axios实例的请求和响应拦截器，最终导出一个配置好的axios实例。

import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: 'https://mock.mengxuegu.com/mock/6434024b56377f1ed96c0837/example',
    timeout: 5000
})
// 请求拦截器,拦截请求前对数据进行处理
// axios 发送请求时，会先执行这个拦截器，可以用来做一些公共的请求处理，比如设置请求头、添加认证信息
service.interceptors.request.use( config => {
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})
// 响应拦截器,拦截请求后对数据进行处理
service.interceptors.response.use(response => {
    // 对响应数据做些什么
    if(response.status === 200){
        return response.data;
    }else{
        Promise.reject();
    }
}, error => {
    // 对响应发生错误时做些什么
    console.log(error);
    return Promise.reject();
})

export default service;