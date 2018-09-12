<template>
    <div id="news">
        我是新闻组件
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <router-link :to="'/content/'+index">{{index}}----{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'我是一个新闻组件',
                list:['111111','222222','333333']
            }
        }
    }
</script>

<style scoped>

</style>