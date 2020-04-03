/**
 *
 * 导入Vue 及 Vue Router
 *
 */
// window.Vue = require('vue'); //引入Vue
import Vue from 'vue'
import VueRouter from 'vue-router'; //引入vue-router
Vue.use(VueRouter); //使用vue-router

/**
 *
 * 导入ElementUI
 *
 */
import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui样式文件
Vue.use(ElementUI); // 使用element-ui
