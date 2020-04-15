// 用户管理路由
import UserCreate from '../components/user/component/Create.vue';
import UserList from '../components/user/Index.vue';

const AccountRouter = [
    {
        path: '/user/create/',
        name: 'userCreate',
        component: UserCreate
    },
    {
        path: '/user/list/',
        name: 'userList',
        component: UserList
    },
 ];
export default AccountRouter;