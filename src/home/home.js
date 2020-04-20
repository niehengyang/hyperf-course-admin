import Vue from 'vue'

/** 第三方通用组件 **/
require('../bootstrap/3rd');

require('../../src/assets/js/home/bootstrap.min');
require('../../src/assets/js/home/classie');
require('../../src/assets/js/home/html5shiv.min');
require('../../src/assets/js/home/jquery.appear');
require('../../src/assets/js/home/jquery.magnific-popup.min');
require('../../src/assets/js/home/jquery-1.9.1.min');
require('../../src/assets/js/home/main');
require('../../src/assets/js/home/masonry');
require('../../src/assets/js/home/masonry.pkgd.min');
require('../../src/assets/js/home/owl.carousel.min');
require('../../src/assets/js/home/smooth-scroll.min');
require('../../src/assets/js/home/typed');


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
