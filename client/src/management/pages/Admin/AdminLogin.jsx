import React from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useHttpClient } from "../../hooks/http-hook";
import axios from "axios";
import toast from "react-hot-toast";

import { Container,Row } from "react-bootstrap";
import Form from "../../../components/UIelements/Form";
import Card from "../../../components/UIelements/Card";
import LoadingSpinner from "../../../components/UIelements/LoadingSpinner";
import { CustomModal } from "../../../components/UIelements/Modal";
import {setCurrentUser} from '../../Redux/adminrelated/adminSlice';
import { useDispatch } from "react-redux";

export default function AdminLogin(){
    const navigate =useNavigate();
    const dispatch=useDispatch();
    const {isLoading, error, sendRequest, handleClose}=useHttpClient();
    const {formState:{errors}}=useForm();

    const handleError=()=>{
        console.log("error");
    }
    const handleLogin=()=>{
        navigate('/admindashboard');
    }
    const loginSubmit=async (formData)=>{
        // data.preventDefault();
        
        try{
            const {email,password}=formData;
            //make sure email and password are provided
            if(!email || !password){
                console.log('Email and password are required');
                return;
            }
            //send a post request to the backend with the formdata
            const {data}=await axios.post('/adminlogin',formData);
            dispatch(setCurrentUser(data));
            
            if(data.error){
                handleError();
            }else{
                handleLogin();
            }
        }catch(error){
            console.log(error);
        }
    };

    const template={
        fields:[
            {
                element:'input',
                type:'text',
                name:'email',
                placeholder:'Enter Your Email',
                registerOptions:{
                    pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message:'Invalid email format'
                }},
                errorMessage: errors.email?.message
            },
            {
                element:'input',
                type:'text',
                name:'password',
                placeholder:'Password',
                registerOptions:{
                    minLength:{
                    value:6,
                    message:'password must be atleast 6 characters long'
            }},
                errorMessage: errors.password?.message
            }
        ]
    };

    return (
    <React.Fragment>
        {error && <customModal title='Error' body={error} handleClose={handleClose}/>}
        {isLoading && <LoadingSpinner asOverlay />}
        <Container>
            <Row className="adminlogin">
            <Card classname="logincard">
                <h1>Admin Login</h1>
                <p>Welcome back! Please enter your details</p>
                {/* {submitError && <p>{submitError}</p>} */}
                <Form template={template}  onSubmit={loginSubmit} buttonLabel="Login"/>
                {/* call back function */}
            </Card>
            </Row>
        </Container>
    </React.Fragment>
    );
}
