import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box,IconButton,Paper } from "@mui/material";
import { GreenButton } from "../../../../../components/UIelements/ButtonStyles";
import TableTemplate from "../../../../../components/UIelements/TableTemplate";
import DeleteIcon from "@mui/icons-material/Delete";

const ShowNotices=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {noticesList,loading,error,response}=useSelector((state)=>state.notice);
    const deleteHandler=()=>{
        console.log("deleted");
    }
    const noticeColumns=[
        {id:'title',label:'Title',minWidth:170},
        {id:'details',label:'Details',minwidth:100}
    ];
    const noticeRows=noticesList && noticesList.length>0 && noticesList.map((notice)=>{
        return {
            title:notice.title,
            details:notice.details,
        };
    });
    const NoticeButtonHaver=({row})=>{
        return (
            <>
            <IconButton onClick={()=>deleteHandler(row.id,"Notice")}>
                <DeleteIcon color="error"/>
            </IconButton>
            </>
        );
    };
    return (
        <>
        {loading?
            <div>Loading...</div>
            :
            <>
            {response?
            <Box>
                <GreenButton onClick={()=>navigate("/admin/addnotice")}>
                    Add Notice
                </GreenButton>
            </Box>
            :
            <Paper>
                {Array.isArray(noticesList) && noticesList.length>0 && 
                    <TableTemplate buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={noticeRows}/> }
            </Paper>
            }
            </>
        }
        </>
    );
}

export default ShowNotices;