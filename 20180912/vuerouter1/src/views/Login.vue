<template>
    <el-container class="page">
        <div class="login">
            <h3>登录</h3>
            <el-form label-width="50px">
                <el-form-item label="帐号">
                    <el-input></el-input>
                </el-form-item>
            
                <el-form-item label="密码">
                    <el-input type="password"></el-input>
                </el-form-item>

                <el-form-item>
                    <router-link to="/registry">没有帐号，去注册</router-link>
                </el-form-item>
                
                <el-button type="primary" @click="login" style="width:100%">登录</el-button>
            </el-form>
        </div>
    </el-container>
</template>

<script>
    export default {
        methods:{
            login:function(){
                console.log(11)
                axios.post('/login')
                .then(response=>{

                })
                .catch(error=>{
                    
                });
            }
        }
    }
</script>

<style lang="less">
    .login{
        width: 320px;
        margin: 100px auto;
        border:1px solid #ddd;
        padding: 50px 20px;
        h3{
            text-align: center;
            margin: 10px;
        }
    }
</style>