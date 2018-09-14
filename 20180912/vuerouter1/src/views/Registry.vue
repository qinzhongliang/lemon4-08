<template>
    <el-container class="page">
        <div class="registry">
            <h3>注册</h3>
            <el-form label-width="50px">
                <el-form-item label="帐号">
                    <el-input></el-input>
                </el-form-item>
            
                <el-form-item label="邮箱">
                    <el-input></el-input>
                </el-form-item>

                <el-form-item label="手机">
                    <el-input></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input type="password"></el-input>
                </el-form-item>

                <el-form-item>
                    <router-link to="/login">已有帐号，返回至登录页面?</router-link>
                </el-form-item>
                
                <el-button type="primary" style="width:100%">注册</el-button>
            </el-form>
            
        </div>
    </el-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
    .registry{
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