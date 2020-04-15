
import VueRouter from 'vue-router';

/* 初始路由模块 */
let routeArray = [
    {
        path: '/',
    },
];

/* 加载路由模块 */
import AccountRouterArray from "./routers/AccountRouter";
import MenuRouterArray from "./routers/MenuRouter";
import RoleRouterArray from "./routers/RoleRouter";
import LogRouterArray from "./routers/LogRouter";

routeArray = routeArray.concat(AccountRouterArray,MenuRouterArray,RoleRouterArray,LogRouterArray);

/* 实例化Vuejs路由对象 */
const routers = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeArray
});

export default routers;