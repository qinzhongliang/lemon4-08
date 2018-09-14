<template>
    <el-container class="page">
        <el-aside width="200px">
            <el-menu
                background-color="#545c64"
                text-color="#fff"
                style="height:100%"
                :default-active="1">
                <div class="logo">LOGO</div>
                <el-menu-item :index="1">首页</el-menu-item>
                <el-menu-item :index="2">数据中心</el-menu-item>
                <el-menu-item :index="3">管理中心</el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-menu mode="horizontal">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据中心</el-menu-item>
                    <el-menu-item index="3">管理中心</el-menu-item>
                </el-menu>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">
    .page{
        width: 100%;
        height: 100%;
        .logo{
            width: 100%;
            height: 50px;
            line-height: 50px;
            color: #fff;
            padding: 0 20px;
            background-color:#545c64; 
        }
        .el-aside{}
        .el-header{
            padding: 0;
        }
    }
</style>