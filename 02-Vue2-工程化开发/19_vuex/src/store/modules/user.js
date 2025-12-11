const state = {
    userInfo: {
        name: '',
        age: 0,
        },
    score: 80
}

const mutations = {
    addScore(state) {
        state.score++
    }
}
const actions = {}
const getters = {
    score(state) {
        return state.score
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}