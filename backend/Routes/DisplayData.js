const express= require('express');
var mongoose = require('mongoose');
const foodcategory = require('../models/foodCategory');
const food_items = require('../models/food_items')
//const foodCategory = require('../models/foodCategory');
const User = require('../models/User');
const router= express.Router();
const URI= 'mongodb+srv://bharpate:Qwerty%40%40123@cluster0.f6jebug.mongodb.net/bharpatemern?retryWrites=true&w=majority';
mongoose.connect(URI)
mongoose.connection.on('open', function(err, doc){
    console.log("connection established");
})
router.get ('/foodData', async function (req,res){
 const    foodItems=await food_items.find()
const foodcat=await foodcategory.find()
res.status(200).json([foodItems,foodcat]);    
});
router.post ('/foodData',async (req,res)=>{
//     const foodCategory= new foodcategory({
//         CategoryName:req.body.CategoryName     
// })
const foodItems= new food_items({
    CategoryName : req.body.CategoryName,
    name:req.body.name,
    img: req.body.img,
    options: [
        {
            half: req.body.options.half,
            full: req.body.options.full,
            small:req.body.options.small,
            medium: req.body.options.medium,
            large: req.body.options.large,
        },
    ],
});
try{
    //const result=await foodCategory.save();
    const result = await foodItems.save();
    res.json(result);
}
catch(error){
res.send('some error=> ${error}');
}
})
   
module.exports= router;