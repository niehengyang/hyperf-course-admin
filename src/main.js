import Vue from 'vue'

/** 第三方通用组件 **/
require("./bootstrap/3rd.js");

Vue.config.productionTip = false;


import App from './App.vue'

import router from './routers';


new Vue(Vue.util.extend({router}, App)).$mount('#app');

// new Vue({
//     router,
//   render: h => h(App),
// }).$mount('#app');
