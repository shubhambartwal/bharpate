const mongoose= require('mongoose');
const {Schema}= mongoose;
const foodCategorySchema= new Schema({
    CategoryName:{
        type:String,
        required:true
   
}
});
module.exports= mongoose.model('foodCategory',foodCategorySchema);