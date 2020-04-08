<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">
    <div>这里是主体页面</div>
    <div>
      <a @click="logoutConfirm" style="cursor: pointer">退出登录</a>
    </div>


    <router-view></router-view>


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

<script>
import TokenFactory from "./assets/utils/tokenfactory";
export default {
  name: 'App',
  data(){
    return{
      logoutConfirmVisible: false
    }
  },
  components: {
  },
  created(){

  },
  methods:{
    logoutConfirm(){
      this.logoutConfirmVisible = true;
    },
    //退出登录
    logout(){
      axios.post('/user/logout').then((res)=>{
          TokenFactory.clearToken();
          window.location.href = '/login';

      });
    }
  },

  mounted() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
