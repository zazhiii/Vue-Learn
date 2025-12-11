const state = {
    theme: 'dark',
    desc: '测试'
}

const mutations = {
    setTheme(state, theme) {
        state.theme = theme
    }
}
const actions = {}
const getters = {}

export default {
    namespaced: true, // 开启命名空间 要使用`...mapState('setting', ['theme'])`需要开启
    state,
    mutations,
    actions,
    getters
}