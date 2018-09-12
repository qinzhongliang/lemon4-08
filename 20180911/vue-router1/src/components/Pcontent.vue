<template>
    <!-- 所有内容要被根节点包含起来 -->
    <div id="pcontent">
        商品详情
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'数据'
            }
        },
        mounted() {
            //获取get传值
            console.log(this.$route.query);
        },
    }
</script>

<style>

</style>