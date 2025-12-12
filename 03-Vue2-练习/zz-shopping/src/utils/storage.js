const USER_INFO_KEY = 'zz_shopping_user_info';

export const getUserInfo = () => {
    const info = localStorage.getItem(USER_INFO_KEY)
    return info ? JSON.parse(info) : {token: '', userId: ''}
}

export const setUserInfo = (userInfo) => {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

export const removeUserInfo = () => {
    localStorage.removeItem(USER_INFO_KEY)
}