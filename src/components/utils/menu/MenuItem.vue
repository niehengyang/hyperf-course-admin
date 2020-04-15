<template>
    <div class="navMenu">
        <label v-for="menu in navMenus" :key="menu.index_value">
            <el-submenu :index="menu.index_value" :disabled="menu.status == 1? false:true" v-if="menu.children">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.display_name}}</span>
                </template>
                <label>
                    <NavMenu :navMenus="menu.children"></NavMenu>
                </label>
            </el-submenu>
            <el-menu-item v-else :disabled="menu.status == 1? false:true" :index="menu.index_value">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.display_name}}</span>
            </el-menu-item>
        </label>

    </div>
</template>

<script>
    export default {
        name: 'NavMenu',
        props: {
            navMenus: {
                type: Array
            }
        },
        data() {
            return {

            }
        },
        components:{
        },
        created(){
            // console.log(this.navMenus)
        },
        methods: {}
    }
</script>

<style scoped>

</style>
