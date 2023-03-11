var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://bharpate:Qwerty%40%40123@ac-7lukhc0-shard-00-00.f6jebug.mongodb.net:27017,ac-7lukhc0-shard-00-01.f6jebug.mongodb.net:27017,ac-7lukhc0-shard-00-02.f6jebug.mongodb.net:27017/?ssl=true&replicaSet=atlas-oj0o4a-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoDB =()=>{
MongoClient.connect(uri,{useNewUrlParser:true}, (err, result)=> {
  if(error)
  console.log("---",err);
  else {
    console.log("connected");
  }
});
}
 module.exports=mongoDB;
