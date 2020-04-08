
import VueRouter from 'vue-router';

/* 初始路由模块 */
let routeArray = [
    {
        path: '/',
    },
];

/* 加载路由模块 */
import AccountRouterArray from './routers/AccountRouter';



routeArray = routeArray.concat(AccountRouterArray);

/* 实例化Vuejs路由对象 */
const routers = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeArray
});

export default routers;