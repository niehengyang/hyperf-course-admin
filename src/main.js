
import Vue from 'vue'

/** 第三方通用组件 **/
require("./bootstrap/3rd");

/** 看门狗 **/
require("./assets/utils/guard");

/** Axios 全局配置 **/
require("./assets/utils/customaxios");


Vue.config.productionTip = false;

axios.defaults.timeout = 5000; // 请求超时
axios.defaults.baseURL = '/api/'; // vue.config.js 中配置的地址

import App from './App.vue'

import router from './routers';


new Vue(Vue.util.extend({router}, App)).$mount('#app');
