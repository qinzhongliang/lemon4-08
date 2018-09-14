const express=require("express");
const bodyParser=require("body-parser");
const db=require("./dbutils");

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//配置数据库的信息
db.config("mongodb://127.0.0.1:27017","userInfo");

//注册
app.post("/registry",function(request,response){
    //获取请求信息
    var username=request.body.username;
    var password=request.body.password;
    var sex=request.body.sex;
    var email=request.body.email;
    var phone=request.body.phone;
    db.insertOne("user",{
        username:username,
        password:password,
        sex:sex,
        email:email,
        phone:phone
    },function(err,obj){
        if(obj==null){
            //返回注册失败的信息
            response.send({
                info:"注册失败",
                url:'/registry'
            });
        }else{
            //返回注册成功的信息
            response.send({
                info:"注册成功",
                url:'/login'
            });
        }
    })
});

//登录
app.post("/login",function(request,response){
    //获取请求信息
    var username=request.body.username;
    var password=request.body.password;
    
    db.findOne("user",{
        username:username,
        password:password
    },function(err,obj){
        if(obj==null){
            //返回登录失败的信息
            response.send({
                info:"登录失败，用户名或密码不匹配",
                url:'/login'
            });
        }else{
            //返回注册成功的信息
            response.send({
                info:"登录成功",
                url:'/'
            });
        }
    })
    
});

app.listen(3000);