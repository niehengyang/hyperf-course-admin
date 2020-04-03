/** 第三方通用组件 **/
require("../bootstrap/3rd");

/**
 * 如果用户已经有Token则跳转到管理网站中
 */
import TokenFactory from "../assets/tokenfactory";

if(TokenFactory.getToken()){
    window.location.href = "/admin/";
}

import LoginForm from './Login.vue'

new Vue(Vue.util.extend({},LoginForm)).$mount('#app');
