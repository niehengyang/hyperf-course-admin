<template>
    <div>
        <!--工具条-->
        <el-row class="tool-bar">
            <el-button class="add-btn" size="medium" type="primary" @click="handleAdd">添加</el-button>
        </el-row>

        <!--表格-->
        <el-row class="table-box" :loading="tableLoading">
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    row-key="id"
                    lazy
                    :load="load"
                    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">

                <el-table-column
                        prop="id"
                        label="ID">
                </el-table-column>

                <el-table-column
                        prop="display_name"
                        label="菜单名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="路由">
                </el-table-column>
                <el-table-column
                        prop="icon"
                        label="图标">
                </el-table-column>
                <el-table-column
                        prop="sort"
                        label="排序">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态">
                    <template slot-scope="scope">
                        <el-tag v-if="scope.row.status == 1" type="success">正常</el-tag>
                        <el-tag v-else type="info">禁用</el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="created_at"
                        label="创建时间"
                        width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>


        <el-row class="pagination-box">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    background
                    :page-size="pageSize"
                    :page-sizes="[10, 20, 30, 40]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalNumber">
            </el-pagination>
        </el-row>

        <el-row class="dialog-box">
            <el-dialog
                    title="添加菜单"
                    :visible.sync="addVisible"
                    width="50%"
                    :before-close="handleCloseAdd">
                <div class="add-from">
                    <el-form :model="addForm" :rules="rules" ref="addForm"
                             label-width="100px" class="demo-ruleForm" size="small">
                        <el-form-item label="菜单名称" prop="name">
                            <el-input v-model="addForm.name" placeholder="请输入菜单名称"></el-input>
                        </el-form-item>

                        <el-form-item label="显示名称" prop="display_name">
                            <el-input v-model="addForm.display_name" placeholder="请输入菜单显示名称"></el-input>
                        </el-form-item>

                        <el-form-item label="上级菜单" prop="parent_id">
                            <el-select v-model="addForm.parent_id" placeholder="请选择上级菜单" @visible-change="handleMenuOption">
                                <el-option v-for="permission in permissionOptions" :label="permission.display_name" :value="permission.id"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="路由/Router" prop="route">
                            <el-input v-model="addForm.route" placeholder="请输入路由（/*）"></el-input>
                        </el-form-item>

                        <el-form-item label="菜单性质" prop="type">
                            <el-radio-group v-model="addForm.type" @change="handleChangeType">
                                <el-radio label="nav">导航</el-radio>
                                <el-radio label="api">API</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="导航图标" prop="icon" v-if="addForm.type == 'nav'">
                            <el-input v-model="addForm.icon" placeholder="请输入导航图标"></el-input>
                        </el-form-item>

                        <el-form-item label="导航标识" prop="index_value" v-if="addForm.type == 'nav'" :rules="[
                                { required: true, message: '请输入导航标识', trigger: 'blur' },
                                { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                            ]">
                            <el-input v-model="addForm.index_value" placeholder="请输入导航标识"></el-input>
                        </el-form-item>

                        <el-form-item label="状态" prop="status">
                            <el-switch
                                    v-model="addForm.status"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    active-value='1'
                                    inactive-value='0'>
                            </el-switch>
                        </el-form-item>

                        <el-form-item label="排序" prop="sort">
                            <el-input v-model="addForm.sort" placeholder="请输入排序号"></el-input>
                        </el-form-item>

                    </el-form>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="handleFormClose('addForm')">取 消</el-button>
                    <el-button type="primary" @click="handleSubmitForm('addForm')" :loading="addLoading">提 交</el-button>
                </span>
            </el-dialog>
        </el-row>
    </div>
</template>

<style>

</style>
<script>
    export default {
        name: "MenuList",
        data(){
            return{
                tableLoading: false,
                tableData: [],

                pageSize: 10,
                currentPage: 1,
                totalNumber: 0,

                addVisible: false,
                addLoading: false,
                addForm: {
                    index_value: '',
                    name: '',
                    display_name: '',
                    parent_id: 0,
                    route: '',
                    type: 'nav',
                    icon: '',
                    status: '1',
                    sort: 1,
                },
                rules: {
                    name: [
                        { required: true, message: '请输入菜单名称', trigger: 'blur' },
                        { min: 1, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
                    ],
                    display_name: [
                        { required: true, message: '请输入菜单显示名称', trigger: 'blur' },
                        { min: 1, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
                    ],
                    route: [
                        { required: true, message: '请填写路由地址', trigger: 'blur' },
                        { min: 1, max: 255, message: '长度在 3 到 255 个字符', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请选择菜单性质', trigger: 'change' }
                    ],
                    status: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ]
                },

                permissionOptions: [
                    {id: 0, display_name: '无'}
                ],

            }
        },
        created() {
            this.initData();
        },
        methods:{

            initData(){
                let params = {
                  pageSize: this.pageSize,
                    page: this.currentPage
                };
                this.tableLoading = true;
                this.$api.restfulApi.list('permission/list',params).then((res)=>{
                  this.tableData = res.data;
                  this.currentPage = res.paginate.current_page;
                  this.totalNumber = res.paginate.total;
                  this.tableLoading = false;
                }).catch(()=>{});
            },

            load(tree, treeNode, resolve) {
                let params = {
                    parentId: tree.id
                };
                this.$api.restfulApi.list('permission/nodes',params).then((res)=>{
                    resolve(res.data);
                });
            },

            //添加
            handleAdd(){
                this.addVisible = true;
            },


            //关闭添加
            handleCloseAdd(){
                this.handleFormClose('addForm');
            },


            //表单关闭
            handleFormClose(formName){
                this.addLoading = false;
                this.addVisible = false;
                this.$refs[formName].resetFields();
            },

            //填充父级菜单
            handleMenuOption(val){
                this.permissionOptions = [{id: 0, display_name: '无'}];
                if (val){
                    this.addForm.parent_id = 0;
                    let params = {
                      type: this.addForm.type
                    };
                    this.$api.restfulApi.list('permission/all',params).then((res)=>{

                        this.permissionOptions = this.permissionOptions.concat(res.data);
                    });
                }
            },

            //更换性质
            handleChangeType(val){
                this.permissionOptions = [{id: 0, display_name: '无'}];
                this.addForm.parent_id = 0;
            },

            //提交创建
            handleSubmitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                        this.$api.restfulApi.create('permission/create',this.addForm).then((res)=>{
                            this.handleFormClose(formName);
                            this.$message.success({showClose: true, message: res.msg, duration: 2000});
                            this.initData();
                        });
                    }
                });
            },

            //编辑
            handleEdit(index,row){

            },
            //删除
            handleDelete(index,row){

            },

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped>
    .tool-bar{
        width: 100%;
        margin-bottom: 20px;
    }
    .add-btn{
        float: left;
    }
    .table-box{
        width: 100%;
        margin-bottom: 20px;
    }
    .pagination-box{
        width: 100%;
        text-align: right;
    }
    .add-from{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>