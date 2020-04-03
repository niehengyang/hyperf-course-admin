<template>
    <div>
        <div>登录</div>
        <div id="login">
            <input type="button" value="点击跳转到index页面"  @click="go()">
        </div>
    </div>
</template>

<script>
    import TokenFactory from "../assets/tokenfactory";
    export default {
        name: "Login",
        data(){
            return{

            }
        },

        created() {
            //如果已经登录则跳转到后台页面
            if(TokenFactory.getToken()){
                window.location.href = "/admin/";
            }else{

                // this.getCaptcha();
            }
        },

        methods:{
            go(){
                window.location.href="/"
            }
        }
    }
</script>

<style scoped>

</style>