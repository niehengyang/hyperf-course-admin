<template>
    <div>登录</div>
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
    }
</script>

<style scoped>

</style>