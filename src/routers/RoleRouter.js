// 角色管理路由
// import UserCreate from '../components/role/Create.vue';
import RoleList from '../components/role/Index.vue';

const RoleRouter = [
    {
        path: '/role/list/',
        name: 'roleList',
        component: RoleList
    },
];
export default RoleRouter;