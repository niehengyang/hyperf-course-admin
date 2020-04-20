<template>
  <div id="app">
    <el-container >

      <el-header>
        <div class="app_logo">
          <img alt="Vue logo" src="./assets/logo.png">
        </div>

        <!--顶部导航-->
        <div class="header_menu_box">
            <h1 style="color: #FFFFFF;height: 60px;text-align: center;margin: unset;">vue-cli+hyperf通用平台开发</h1>
          <!--<horizontal-menu :menuList="menuList" backGroundColor="#B3C0D1" activeIndex=""></horizontal-menu>-->
        </div>


        <div class="header_logout_box">
            <el-row class="avatar_item">
                <el-avatar :size="50" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
            </el-row>
          <el-menu background-color="#B3C0D1" mode="horizontal">
            <el-submenu index="1">
              <template slot="title">{{currentUser.name}}</template>
              <el-menu-item index="2-1">
                <i class="el-icon-postcard"></i>
                <span slot="title">个人信息</span>
              </el-menu-item>
              <el-menu-item index="2-2" @click="logoutConfirm">
                <i class="el-icon-switch-button"></i>
                <span slot="title">退出登录</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-header>

      <el-container>
        <!--左侧导航-->
        <el-aside class="aside_menu_box" style="width: unset">
          <vertical-menu backGroundColor="#D3DCE6" :menu-list="menuList" :default-active="activeIndex" v-on:submenuOpen="handleSubmenuOpen"
                         v-on:submenuClose="handleSubmenuClose" v-on:menuSelect="handleMenuSelect"></vertical-menu>
        </el-aside>

        <!--内容导航-->
        <el-main class="main_box">

           <el-row class="main_box_pannel">
             <!--子页面-->
             <router-view></router-view>

           </el-row>
          </el-main>
      </el-container>

    </el-container>


    <div class="dialog-box">
      <!-- 退出登录确认提示框 -->
      <el-dialog title="提示" :visible.sync="logoutConfirmVisible" :show-close="false">
        <div style="text-align: center">
          <span>你确定要退出系统吗?</span>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="logoutConfirmVisible = false">取消</el-button>
                <el-button type="primary" @click="logout">确 定</el-button>
            </span>
      </el-dialog>
    </div>
  </div>
</template>

<style src="./assets/css/app.css"></style>

<script>
  import HorizontalMenu from "./components/utils/menu/HorizontalMenu.vue";
  import VerticalMenu from "./components/utils/menu/VerticalMenu.vue";
  import TokenFactory from "./assets/utils/tokenfactory";
export default {
  name: 'App',
  data(){
    return{
      currentUser: window.__login_user__,
      pageLoading: false,
      logoutConfirmVisible: false,
      activeIndex: 'menuList',
      menuList: [],
      // isCollapse: false //菜单收缩
    }
  },
  components: {
    'horizontal-menu': HorizontalMenu,
    'vertical-menu': VerticalMenu
  },
  created(){
    this.initActiveMenu();
    this.initData();
  },
  methods:{

    initData(){
      this.$api.restfulApi.list('permission/menu').then((res)=>{
        if (res.data){
          this.menuList = JSON.parse(JSON.stringify(res.data));
        }else{
          this.menuList = [];
        }
      })
    },

    logoutConfirm(){
      this.logoutConfirmVisible = true;
    },

    //退出登录
    logout(){
      this.$api.restfulApi.create('user/logout').then((res)=>{
        this.logoutConfirmVisible = false;
          TokenFactory.clearToken();
          window.location.href = '/login';

      });
    },

    //组合菜单打开
    handleSubmenuOpen(key, keyPath){
      // console.log(key, keyPath);
    },
    //组合菜单关闭
    handleSubmenuClose(key, keyPath){
      // console.log(key, keyPath);
    },

    //激活菜单
    initActiveMenu(){
      this.activeIndex = this.$route.name;
    },

    //菜单选中
    handleMenuSelect(key, keyPath){
      switch (key) {
        case 'home': window.location.href = '/home';
              break;
        default: this.$router.push({name: key,query: ''});
      }
    }
  },

  mounted() {

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app_logo{
  width: 240px;
  height: 60px;
  float: left;
  text-align: center;
}

.app_logo img{
  width: 60px;
  height: 60px;
}

.header_menu_box{
  background-color: #B3C0D1;
  max-width: 70%;
  height: 60px;
  float: left;
}

  .header_logout_box{
    background-color: #B3C0D1;
    width: 160px;
    height: 60px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .avatar_item{
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
  }
  .aside_menu_box{
    height:100%;
    overflow: hidden;
  }

  .main_box{
    padding: unset;
    padding-left: 260px;
    padding-top: 60px;
  }
  .main_box_pannel{
    padding: 20px;
  }
</style>
