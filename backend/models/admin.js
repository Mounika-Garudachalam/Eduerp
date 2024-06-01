const mongoose=require('mongoose');
const {Schema}=mongoose;

const adminSchema=new Schema({
    yourname:String,
    schoolname:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

const adminModel=mongoose.model('Admin',adminSchema);

module.exports=adminModel;