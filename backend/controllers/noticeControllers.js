const Notice=require('../models/notice');

const noticeCreate=async(req,res)=>{
    try{
        const notice=new Notice({
            ...req.body
        })
        const result=await notice.save();
        res.send(result);
    }catch(err){
        res.status(500).json(err);
    }
};

const noticeList=async(req,res)=>{
    
    try{
        const {id}=req.params;        //assuming adminId is passed as a URL parameter 
        let notices=await Notice.find({adminId:id});
        if (notices.length>0){
            res.send(notices)
        }else{
            res.send({message:"No notices found"});
        }
    }catch(err){
        res.status(500).json(err);
    }
};
module.exports={noticeCreate,noticeList};