const express=require('express');
const Admin=require('../models/admin');
const {hashPassword,comparePassword}=require('../helpers/auth');
const jwt=require('jsonwebtoken');

const test=(req,res)=>{
    res.json('test is working')
} 
//register end point
const registerAdmin=async(req,res)=>{
    
    try{
        // console.log(Admin);
        const {yourname,schoolname,email,password}=req.body;
        
        //check if name and schoolname is entered
        if(!yourname || !schoolname){
            return res.json({
                error:'name is required'
            })
        };
        //check if password is good
        if(!password||password.length<6){
            return res.json({
                error:'Password is required and should be atleast 6 characters'
            })
        };
        //check email
        const exist=await Admin.findOne({email})
        if(exist){
            return res.json({
                error:'Email is taken already'
            })
        }
        
        const hashedPassword=await hashPassword(password)
        
    //create admin in database
    const admin=await Admin.create.save({
        yourname,schoolname,email,password:hashedPassword
    });

    // console.log('Created admin:',admin);
    return res.json(admin);  //return newly created admin
    
    }catch(error){
        console.log(error);
        return res.status(500).json({error:'Internal server error'});
    }
}

//login endpoint

const loginAdmin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        //check if admin exists
        const admin=await Admin.findOne({email});
        if(!admin){
            return res.json({
                error:'No Admin found'
            })
        }
        //check if passwords match
        const match=await comparePassword(password,admin.password);
        if(match){
            // res.json('passwords match')
            //generate jwt token
            const token=jwt.sign({email:admin.email,id:admin._id,yourname:admin.yourname,schoolname:admin.schoolname},process.env.JWT_SECRET);
            //set token in cookie and send admin data
            res.cookie('token',token).json(admin)
            }else{
                //if passwords do not match send error respone
                return res.json({
                    error:"Invalid Credentials"
                });
            }
        }
        // return res.json(admin); 
    catch(error){
        console.log(error);
    }
}

//add a mew end point to fetch the admin profile data
//AdminProfile

const getAdminProfile=async(req,res)=>{
    try{
        // const admin=await Admin.findOne({email:req.body.email});
        const {email}=req.query;    //assuming you'll send admin's email from the frontend
        if(!email){
            return res.json({error:"Email not provided"});
        }
        const admin=await Admin.findOne({email});
        if(!admin){
            return res.json({
                error:'Admin not found'
            });
        }
        return res.json(admin);
    }catch(error){
        console.log(error);
        return res.status(500).json({error:'Internal server error'});
    }
}



module.exports={test,registerAdmin,loginAdmin,getAdminProfile};