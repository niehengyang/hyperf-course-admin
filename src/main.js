
import Vue from 'vue'

/** 第三方通用组件 **/
require("./bootstrap/3rd");

/** 看门狗 **/
require("./assets/utils/guard");

/** Axios 全局配置 **/
require("./assets/utils/customaxios");

Vue.config.productionTip = false;

import apis from "./assets/js/apis/index";
Vue.prototype.$api = apis;

axios.defaults.timeout = 5000; // 请求超时

import App from './App.vue'

import router from './routers';

new Vue(Vue.util.extend({router}, App)).$mount('#app');
