import Vue from 'vue';
import router from './router';
import Vuex from 'vuex';
import store from './store/store';
import axios from './axios/axios.js';
import url from './axios/url.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import App from './App';
import '../static/css/main.css';
import echarts from 'echarts';
import "babel-polyfill";
import VueWechatTitle from 'vue-wechat-title';


require('./mock.js')
Vue.use(Vuex);
Vue.use(VueWechatTitle);
Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$url = url;



// localStorage.setItem('ms_username', 'admin');
//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem('ms_username');
//     store.state.userName = role;
//     store.state.sidebarItem.meta = to.meta;
//     if (!role) {
//         if (to.path !== "/login") {
//             next('login');
//         }
//     }
//     if (to.meta.permission) {
//         // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//         role === 'admin' ? next() : next('/403');
//     } else {
//         // 验证后台返回登录状态
//         next()
//     }
// })



new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

Vue.filter('getYMD', function(input) {
    return input.split('')[0];
})
