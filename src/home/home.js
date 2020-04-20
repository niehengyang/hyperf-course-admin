import Vue from 'vue'

/** 第三方通用组件 **/
require('../bootstrap/3rd');

import Home from './Home.vue'
import baseVueRouter from "vue-router"; // 引入App最外层页面组件

Vue.config.productionTip = false;

const router = new baseVueRouter({ // 定义VueRouter路由对象
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [  // 定义前端路由
        {
            path: '/',
            component: Home
        }
    ]
});

new Vue({
    router,
    render: h => h(Home),
}).$mount('#home');
