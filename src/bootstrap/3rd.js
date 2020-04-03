/**
 *
 * 导入Vue 及 Vue Router
 *
 */
import Vue from 'vue'

import baseVueRouter from 'vue-router'; //引入vue-router
Vue.use(baseVueRouter); //使用vue-router

/**
 *
 * 导入ElementUI
 *
 */
import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui样式文件
Vue.use(ElementUI); // 使用element-ui
