const mongoose=require('mongoose');
const imagesSchema=new mongoose.Schema({
    filename:{
        type:String
    },
    image:{
        Data:Buffer,
        ContentType:String
    }
})
const imageModel=mongoose.model('multiple',imagesSchema);
module.exports=imageModel;