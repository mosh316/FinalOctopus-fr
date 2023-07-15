const MongoClient=require('mongodb');
const mongoose=require('mongoose');

const fruitSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId ,
    name:{
        type:String,
        required:[true,'name is required'],
    },
    qty:{
        type:Number,
        required:[true,'quantity is required'],
    },
    rating:{type:Number,
        required:[true,"rating is required"],

    },
    microsieverts:{
        type:Number
    }
});
module.exports=mongoose.model('Fruit',fruitSchema);