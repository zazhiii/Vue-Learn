import request from "@/utils/request.js";

// 用户注册
export const userRegisterService = ({username, password, repassword}) => {
  return request.post("/user/register", {username, password, repassword});
}

// 用户登录
export const userLoginService = ({username, password}) => {
  // request.post('api/login', { username, password })
  return {
    data: {
      token: 'fake-login-token',
    }
  }
}

export const userGetInfoService = () => {
  // request.get('/my/userinfo')
  return {
    data: {
      nickname: "小伞兵", username: "小书包",
    }
  }
}
