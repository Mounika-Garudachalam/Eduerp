
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "../../../../../components/UIelements/Button";
import { AddModal } from "../../../../../components/UIelements/Modal";
import axios from "axios";
import Popup from "../../../../../components/UIelements/Popup";
import { useDispatch,useSelector } from "react-redux";
import ShowNotices from './ShowNotices';
import { addStuff } from "../../../../Redux/adminrelated/adminHandle";
import { underControl } from "../../../../Redux/adminrelated/adminSlice";

export default function AdminNotice(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { status, response, error } = useSelector(state => state.admin);
    const { currentUser } = useSelector(state => state.admin);
    const [showModal,setShowModal]=useState(false);
    const [showPopup,setShowPopup]=useState(false);
    const [title,setTitle]=useState('');
    const [details,setDetails]=useState('');
    const [popupMessage,setPopupMessage]=useState('');  

    //ensure currentUser is defined before using its properties
    const adminId=currentUser?currentUser._id:null;
    const address="notice"
    const fields={title,details,adminId};

    const handleCloseModal=()=>setShowModal(false);
    const handlePathModal=async ()=>{
        try{
            // const requestData={title,details};
            // const response=await axios.post('/noticecreate',requestData);
            // console.log(response.data);
            setPopupMessage("Done Successfull");
            setShowPopup(true);
            dispatch(addStuff(fields,address));
            navigate('/admindashboard');
        }catch(error){
            console.log(error);
            setPopupMessage("An Error Occurred");
            setShowPopup(true);
        }
        
     }
     useEffect(()=>{
        if(status==='added'){
            navigate('/notices');
            dispatch(underControl());
        }else if(status==='error'){
            // setMessage("Network Error");
            setShowPopup(true);
        }
     },[status,navigate,error,response,dispatch]);
    return (
        <>
            <Container>
                <Button onClick={()=>setShowModal(true)}>Add Notice</Button>
                <AddModal
                    show={showModal}
                    title='Add Notice'
                    body={
                    <div>
                        <input  type="text"
                        style={{
                            width:"100%",
                            height:"100px",
                            padding:"10px",
                            boxSizing:"border-box" }}
                        placeholder="Enter Title..."
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <input  type="text"
                        style={{
                            width:"100%",
                            height:"100px",
                            padding:"10px",
                            boxSizing:"border-box" }}
                        placeholder="Enter Notice..."
                        onChange={(e)=>setDetails(e.target.value)}
                        />
                    </div>
                    }
                    handlePath={handlePathModal}
                    handleClose={handleCloseModal}
                    />
            </Container>
            <Popup message={popupMessage} setShowPopup={setShowPopup} showPopup={showPopup} />
            {/* render shownotices component here */}
            <ShowNotices/>
        </>
    );
}
