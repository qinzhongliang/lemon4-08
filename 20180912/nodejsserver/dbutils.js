//1.导入mongodb客户端
var mongoClient=require("mongodb").MongoClient;
//2.定义url
var _url="";
//3.定义数据库名称
var _dbName="";
//4.导出配置信息
module.exports.config=function(url,dbName){
    _url=url;
    _dbName=dbName;
}
//5连接数据库
function connect(collectionName,callback){
    if(_url==""||_dbName==""){
        throw new Error("请输入url和dbName");
    };
    //连接数据库
    mongoClient.connect(_url,function(err,client){
        if(err)throw err;
        var db=client.db(_dbName);
        var collection=db.collection(collectionName);
        if(callback){
            callback(err,collection,client);
        }
    });
}

/**
 * 插入一条数据
 * @param collectionName 集合名称
 * @param doc 要插入的对象
 * @param callback 回调函数
 */
module.exports.insertOne = function (collectionName,doc,callback) {
    connect(collectionName,function (err,collection,client) {
        collection.insertOne(doc,function (err,result) {
            client.close();
            if (callback){
                callback(err,result);
            }
        })
    })
}

/**
 * 查找一个
 * @param collectionName 集合名
 * @param query 查询条件
 * @param callback 回调函数
 */
module.exports.findOne = function (collectionName,query,callback) {
    connect(collectionName,function (err,collection,client) {
        collection.findOne(query,function (err,doc) {
            client.close();
            if (callback){
                callback(err,doc);
            }
        })
    })
};