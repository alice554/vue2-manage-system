//加载请求配置文件
// request 是request.js文件中创建的名为service的axios实例的内部方法，
import request from '../utils/request';
//设置请求配置
export const fetchData = (query) => {
    // 箭头函数会将请求成功的数据传递给 Promise 对象的 resolve 回调函数。
    // 调用request.js里面的函数,并给这个函数传递三个参数
    return request({
        // 这里的url相对于request.js里面的 baseURL
        url: '/getTabelList',
        method: 'get',
        data: query
    })
}

// https://mock.mengxuegu.com/mock/6434024b56377f1ed96c0837/example/getTabelList
