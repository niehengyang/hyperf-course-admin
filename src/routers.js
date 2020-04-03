import VueRouter from 'vue-router';

/* 加载路由模块 */
import AccountRouterArray from './routers/AccountRouter';

/* 初始路由模块 */
let routeArray = [
    {
        path: '/',
    //     beforeEnter: (to, from, next) => {
    //         if (window.__login_user__.admin_level == '04') {
    //             // 是企业级别的账号，进入到EnterpriseData组件中
    //             next('/enterpriseDate/device')
    //         } else {
    //             // 其他级别的账号，进入到data组件中
    //             next('/data/')
    //         }
    //     }
    }
];

routeArray = routeArray.concat(AccountRouterArray);

/* 实例化Vuejs路由对象 */
const routers = new VueRouter({
    mode: 'hash',
    routes: routeArray
});

export default routers;