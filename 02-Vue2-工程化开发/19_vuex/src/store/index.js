// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

import user from '@/store/modules/user'
import setting from '@/store/modules/setting'

// 创建仓库 store
const store = new Vuex.Store({
    state: {
        count: 0,
        title: "hello vuex",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    mutations: {
        addCount(state) {
            state.count++
        },
        addN(state, n) {
            state.count += Number(n)
        },
        updateCount(state, val) {
            state.count = val
        },
        subOne(state) {
            state.count -= 1
        }
    },
    actions: {
        addOneAsync(context) {
            setTimeout(() => {
                context.commit('addCount')
            }, 1000)
        },
        subOneAsync(context) {
            setTimeout(() => {
                context.commit('subOne')
            }, 1000)
        }
    },
    getters: {
        filter(state) {
            // 过滤出大于val的数字
            return state.list.filter(item => item % 2 === 0)
        }
    },
    modules: {
        user,
        setting
    }
})

// 导出仓库
export default store