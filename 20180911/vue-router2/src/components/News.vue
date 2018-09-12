<template>
    <div id="news">
        我是新闻组件
        <ul class="list">
            <li v-for="(item,index) in list" :key=index>
                <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            requestData(){
                //jsonp请求，后台api接口要支持jsonp
                var api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
                this.$http.jsonp(api).then((response)=>{
                    console.log(response);
                    //this指向,用箭头函数指向实例
                    this.list=response.body.result;
                },function(err){
                    console.log(err);
                });
            }
        },
        mounted() {
            this.requestData();
        },
    }
</script>

<style lang="less" scoped>
.list{
    li{
        height: 34px;
        line-height: 34px;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        list-style: none;
    }
    a{
        color:#666;
    }
}
</style>