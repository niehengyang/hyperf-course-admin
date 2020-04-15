import Vue from 'vue'

/** 第三方通用组件 **/
require("../bootstrap/3rd.js");

/**
 * 如果用户已经有Token则跳转到管理网站中
 */
import TokenFactory from "../assets/utils/tokenfactory";

if(TokenFactory.getToken()){
    window.location.href = "/";
}

import apis from "../assets/js/apis/index";
Vue.prototype.$api = apis;
axios.defaults.timeout = 5000; // 请求超时

import LoginForm from './Login.vue'
import baseVueRouter from "vue-router";

Vue.config.productionTip = false;

const router = new baseVueRouter({ // 定义VueRouter路由对象
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [  // 定义前端路由
        {
            path: '/',
            component: LoginForm
        }
    ]
});

new Vue({
    router,
    render: h => h(LoginForm),
}).$mount('#login');
