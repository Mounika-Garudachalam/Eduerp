import React, { useEffect } from "react";
import Card from "../../../../../components/UIelements/Card";
import TableTemplate from '../../../../../components/UIelements/TableTemplate';
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotices } from "../../../../Redux/noticerelated/noticeHandle";

const SeeNotice=()=>{
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=>state.admin);
    const {noticesList,response,error,loading}=useSelector((state)=>state.notice);
    useEffect(()=>{
        if(currentUser){
            dispatch(getAllNotices(currentUser._id,"notice"));
        }
    },[dispatch,currentUser])
    const noticeColumns=[
        {id:'title',label:'Title',minWidth:170},
        {id:'details',label:'Details',minWidth:100}
    ];
    const noticeRows=noticesList.map((notice)=>{  
    return {
            title:notice.title,
            details:notice.details,
            id:notice._id
    };
    });
    return (
        <>
            <div>
                {loading?(
                    <div>Loading...</div>
                ):response?(
                    <div>No Notices to show right now</div>
                ):(
                <>
                    <h3>Notices</h3>
                    <Paper>
                        {Array.isArray(noticesList) && noticesList.length>0 && 
                            <TableTemplate columns={noticeColumns} rows={noticeRows}/>}
                    </Paper>
                </>
                )}
            </div>
        </>
    );
}

export default SeeNotice;