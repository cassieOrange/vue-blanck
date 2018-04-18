/**
 * crated by cassie
 * 2018.4.9
 * 入口文件，根实例注册
 */
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局状态管理
import store from './store/index';
// 引入requset对象
import request from '../src/api/axios/request'


Vue.config.productionTip = false;

// 注册全局变量，在其他位置 this.$post 即可引用
Vue.prototype.$post = request.post;
Vue.prototype.$get = request.get;


// 根实例注册
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
