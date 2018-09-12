<template>
    <div id="content" class="content">
        <h2>{{list.title}}</h2>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        mounted() {
            //获取动态参数
            var aid=this.$route.params.aid;
            console.log(aid);
            //调用请求数据的方法
            this.requestData(aid);
        },
        methods:{
            requestData(aid){
                var api="http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
                //get请求跨域,后台要允许跨域
                this.$http.get(api).then((response)=>{
                    console.log(response);
                    this.list=response.body.result[0];
                },(err)=>{
                    console.log(err);
                });
            }
        }
    }
</script>

<style lang="less">

</style>