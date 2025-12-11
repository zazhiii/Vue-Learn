import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store // 将 store 实例传入 Vue 实例; store: store
}).$mount('#app')
