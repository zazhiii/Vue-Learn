import axios from 'axios';
import { Toast } from "vant";

const _axios = axios.create({
    baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
    timeout: 5000
})

// 添加请求拦截器
_axios.interceptors.request.use(function (config) {

    // 开启加载提示
    Toast.loading({
        message: '加载中...',
        duration: 0,
        forbidClick: true,
    })

    return config
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
_axios.interceptors.response.use(function (response) {
    const res = response.data

    // 统一处理错误
    if (res.status !== 200) {
        Toast(res.message)
        return Promise.reject(res.message)
    }

    Toast.clear() // 关闭加载提示

    return response.data // 抽出一层
}, function (error) {
    return Promise.reject(error)
})

export default _axios