<template>
    <div>
        <el-menu :default-active="defaultActive"
                 class="el-menu-vertical-demo"
                 :background-color="backGroundColor"
                 :active-text-color="activeTextColor"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="handleMenuSelect"
                 :collapse="isCollapse">
            <menu-item :nav-menus="menuList"></menu-item>
        </el-menu>
    </div>
</template>

<script>
    import menuItem from './MenuItem.vue';
    export default {
        name: "VerticalMenu",
        props: {
            defaultActive: {
              type: String
            },
            menuList:{
                type: Array,
            },
            backGroundColor: {
                type: String
            },
            activeTextColor: {
                type: String
            },
            isCollapse: {
                type: Boolean,
                default() {
                    return false;
                }
            },
        },
        components:{
            'menu-item': menuItem
        },
        data(){
            return{
                // isCollapse: false,
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                this.$emit('submenuOpen',key, keyPath);
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                this.$emit('submenuClose',key, keyPath);
                // console.log(key, keyPath);
            },
            handleMenuSelect(key, keyPath){
                this.$emit('menuSelect',key, keyPath);
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-submenu{

    }
</style>