const mongoose = require('mongoose');
const mongoURI= 'mongodb+srv://bharpate:Qwerty%40%40123@cluster0.f6jebug.mongodb.net/bharpatemern?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
const mongoDB =async()=>{
  await mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
}
  ).then(()=>{
    console.log('connected');
    const fetched_data=  mongoose.connection.db.collection('food_items');
    fetched_data.find({}).toArray(function (err,data){
    if(err)console.log(err);
    else console.log(data);
  })
  }).catch((error)=>{
    console.log(error);
  });
}

 module.exports=mongoDB;
