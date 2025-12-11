import { getUserInfo, setUserInfo } from '@/utils/storage.js'

export default {
    namespaced: true,
    state: {
        userInfo: getUserInfo(),
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
            setUserInfo(userInfo)
        }
    },
    actions: {},
    getters: {}
}