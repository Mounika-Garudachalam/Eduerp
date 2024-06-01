const mongoose=require('mongoose');

const noticeSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
    // school:{
    //     type:mongoose.Schema.Types.objectId,
    //     ref:'admin'
    // }
});

module.exports=mongoose.model("notice",noticeSchema);