import axios from 'axios';
export default {
    namespaced: true,
    state(){
        return {
            list:[]
        }
    },
    mutations: {
        updateList(state, newList){
            state.list = newList;
        },
        updateCount(state, {id, count}){
            const item = state.list.find(item => item.id === id);
            if(item){
                item.count = count;
            }
        }
    },
    getters: {
        total(state){
            return state.list.reduce((total, item) => total + item.count, 0);
        },
        totalPrice(state){
            return state.list.reduce((total, item) => total + item.count * item.price, 0);
        }
    },
    actions: {
        async getList(context){
            const res = await axios.get('http://localhost:3000/cart')
            context.commit('updateList',res.data)
        },
        async updateCountAsync(context, {id, count}){
            // 异步请求跟新数据库
            const res = await axios.patch(`http://localhost:3000/cart/${id}`, {
                count
            });
            if(res.status === 200){
                // 如果请求成功，跟新vuex中的数据
                context.commit('updateCount', {id, count});
            }
        }
    }
}