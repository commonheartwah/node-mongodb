var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("userMansge");
    var myobj = { name: "王大哈", age: 25 };
    
    // 插入
    // dbo.collection("userInfo").insertOne( {_id:'2016', name: "王大哈", age: 25 }, function(err, res) {
    //     if (err) throw err;
    //     console.log("插入成功");
    //     db.close();
    // });
    // 查找
    dbo.collection("userInfo").find().toArray(function(err,docs){
        console.log(docs)
        db.close()
    });
    
});