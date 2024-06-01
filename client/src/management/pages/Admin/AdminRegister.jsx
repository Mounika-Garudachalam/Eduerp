import React,{useState} from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
import { useHttpClient } from "../../hooks/http-hook";

import { Container,Row } from "react-bootstrap";
import Form from "../../../components/UIelements/Form";
import Card from "../../../components/UIelements/Card";
import {CustomModal} from "../../../components/UIelements/Modal";
import LoadingSpinner from "../../../components/UIelements/LoadingSpinner";

export default function AdminRegister(){

    const [showModal,setShowModal]=useState(false);
    const handleRegistration=()=>{
        setShowModal(true);
    }
    const handleCloseModal=()=>setShowModal(false);
    const {isLoading, error, sendRequest, handleClose}=useHttpClient();

    const template={
        fields:[
            {
                element:'input',
                type:'text',
                name:'yourname',
                placeholder:'Enter Your Name',
                autoComplete:"name",
                registerOptions:{
                    required:{
                        value:true,
                        message:'name is required'
                    }
                }
            },
            {
                element:'input',
                type:'text',
                name:'schoolname',
                placeholder:'School Name',
                autoComplete:"off",
                registerOptions:{
                    required:{
                        value:true,
                        message:'school name is required'
                    }
                }
            },
            {
                element:'input',
                type:'email',
                name:'email',
                placeholder:'Email Id',
                autoComplete:"email",
                registerOptions:{
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:'Invalid email format'
                    }},
                // errorMessage: errors.email?.message
            },
            {
                element:'input',
                type:'password',
                name:'password',
                placeholder:'Password',
                autoComplete:'current-password',
                registerOptions:{
                    minLength:{
                        value:6,
                        message:'password must be atleast 6 characters long'
                    }},
                // errorMessage: errors.password?.message
            }
        ]
    };

    //admin register end point
    const adminRegister=async (formData)=>{

        try{
            const {data}=await axios.post('/adminregister',formData);
        
        console.log('Admin registration successful:',data);
        handleRegistration();
        //add any navigation logic here
    
        
    }catch(error){
        console.log(error);
    }
        /* navigate('admindashboard');*/
    };

    return (
        <React.Fragment>
        {error && <customModal title='Error' body={error} handleClose={handleClose}/>}
        {isLoading && <LoadingSpinner asOverlay />}
        <Container>
            <Row className="adminregister">
            <Card className="registercard">
                <h1>Admin Register</h1>
                <p>Create your own school by registering as an admin.<br/>
                You will be able to add students and faculty and manage the system.</p>
                <Form template={template} onSubmit={adminRegister} buttonLabel="Register"/>
            </Card>
            </Row>
            <CustomModal 
                show={showModal}
                handleClose={handleCloseModal}
                title="Registration Successful"
                body="Please login to continue.."
            />
        </Container>
        </React.Fragment>

    );
}