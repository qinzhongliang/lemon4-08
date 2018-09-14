<template>
    <el-container class="page">
        <div class="login">
            <h3>密码登陆</h3>
            <el-form label-width="50px">
                <el-form-item label="帐号">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
            
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                
                <el-button type="primary" @click="login" style="width:100%">登录</el-button>
            
                <el-form-item>
                    <router-link to="/registry">还没有帐号？立即注册</router-link>
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
                    password:''
                }
            }
        },
        methods:{
            login(){
                axios.post('/api/login',this.form)
                .then(res=>{
                    console.log(res);
                    //跳转首页
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