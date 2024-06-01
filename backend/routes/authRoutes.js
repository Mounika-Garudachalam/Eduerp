    const express=require('express');
    const router=express.Router();
    const cors=require('cors');
    const {test,registerAdmin,loginAdmin,getAdminProfile}=require('../controllers/authControllers');
    const {noticeCreate,noticeList} =require('../controllers/noticeControllers');

    //middleware for test
    router.use(
        cors({
            credentials:true,
            origin:'http://localhost:3000'
        })
    );

    router.get('/',test);
    router.post('/adminregister',registerAdmin);
    router.post('/adminlogin',loginAdmin);
    router.get('/getadminprofile',getAdminProfile);
    //notice
    router.post('/noticecreate',noticeCreate);
    router.get('/noticelist/:id',noticeList);

    module.exports=router;