import Vue from 'vue'
import App from './App.vue'

/** 第三方通用组件 **/
require("../bootstrap/3rd");

Vue.config.productionTip = false;

import router from './routers';

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
