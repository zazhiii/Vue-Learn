import axios from 'axios'

import { useUserStore } from "@/stores/index.js";
import {ElMessage} from "element-plus";
import router from "@/router/index.js";

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {

    // 请求头携带token
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }

    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {

    // 成功
    if(res.data.status === 0){
      return res.data
    }

    // 失败
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data.message)
  },
  (err) => {
    // 401 未授权
    if (err.response.status === 401) {
      router.push('/login')
    }

    // 错误的默认情况
    ElMessage.error(err.response.data.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
