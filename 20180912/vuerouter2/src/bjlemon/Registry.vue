<template>
    <el-container class="page">
        <div class="registry">
            <h3>注册帐号</h3>
            <el-form label-width="50px">
                <el-form-item label="帐号">
                    <el-input type="text" v-model="form.username"></el-input>
                </el-form-item>
            
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-input type="text" v-model="form.sex"></el-input>
                </el-form-item>

                <el-form-item label="邮箱">
                    <el-input type="text" v-model="form.email"></el-input>
                </el-form-item>

                <el-form-item label="手机">
                    <el-input type="text" v-model="form.phone"></el-input>
                </el-form-item>

                <el-button type="primary" @click="registry" style="width:100%">注册</el-button>

                <el-form-item>
                    <router-link to="/login">已有帐号？立即登录</router-link>
                </el-form-item>
            </el-form>
            
        </div>
    </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                form:{
                    username:'',
                    password:'',
                    sex:'',
                    email:'',
                    phone:''
                }
            }
        },
        methods:{
            registry(){
                axios.post('/api/registry',this.form)
                .then(res=>{
                    console.log(res);
                    //跳转登录页面
                    window.location.href=res.data.url;
                }).catch(err=>{
                    console.log(err);
                    //刷新此页面
                    window.location.href=err.data.url;
                });
            }
        }
    }
</script>

<style scoped>

</style>