
import VueRouter from 'vue-router';

/* 初始路由模块 */
let routeArray = [
    {
        path: '/',
        redirect: '/menu/list'
    },
];

/* 加载路由模块 */
import AccountRouterArray from "./routers/AccountRouter";
import MenuRouterArray from "./routers/MenuRouter";
import RoleRouterArray from "./routers/RoleRouter";
import LogRouterArray from "./routers/LogRouter";
import DemoRouterArray from "./routers/DemoRouter";

routeArray = routeArray.concat(AccountRouterArray,MenuRouterArray,RoleRouterArray,LogRouterArray,DemoRouterArray);

/* 实例化Vuejs路由对象 */
const routers = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeArray
});

export default routers;