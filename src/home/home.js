/** 第三方通用组件 **/
require('../bootstrap/3rd');

import Home from './Home.vue' // 引入App最外层页面组件

const router = new VueRouter({ // 定义VueRouter路由对象
    mode: 'hash', // 前端路由模式为/#/
    routes: [  // 定义前端路由
        {
            path: '/',
            component: Home
        }
    ]
});

new Vue(Vue.util.extend({router}, Home)).$mount('#home');