<template>
    <!-- 所有内容要被根节点包含起来 -->
    <div id="home">
        我是首页组件
        <ul>
            <li v-for="(item,index) in list" :key=index>
                <router-link :to="'/pcontent?id='+index">{{index}}---{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'我是一个home组件',
                list:['商品111111','商品222222','商品333333']
            }
        }
    }
</script>

<style>

</style>