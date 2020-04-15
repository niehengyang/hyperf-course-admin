// 用户管理路由
import UserCreate from '../components/user/Create.vue';
import UserList from '../components/user/List.vue';

const AccountRouter = [
    {
        path: '/user/create/',
        component: UserCreate
    },
    {
        path: '/user/list/',
        component: UserList
    },
 ];
export default AccountRouter;