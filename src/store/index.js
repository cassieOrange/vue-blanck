/**
 * vuex 状态管理
 * 2018.4.9
 * cassie
 */
import Vue from 'vue';
import Vuex from 'vuex';
// localstorage 缓存
import LStorage from '../api/cache/LStorage'

// 注册vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        test: 0 || LStorage.getItem('test'),
    },
    mutations: {
        test(state, payload) {
            state.test = payload;
            LStorage.setItem('test', payload)
        },
        
    }
});
// 输出到console，查看store数据
// window.store = store;
export default store;
