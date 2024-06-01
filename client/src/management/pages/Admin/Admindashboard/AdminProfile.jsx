//add the useEffect hook to fetch admin profile data when the component mounts
import React,{useState,useEffect} from "react";
import axios from "axios";
// import {useSelector} from 'react-redux';

import { Container } from "react-bootstrap";
import Card from "../../../../components/UIelements/Card";  

export default function AdminProfile(){
    // const {currentAdmin}=useSelector((state)=>state.auth);
    const [adminData,setAdminData]=useState(null);
    const [error,setError]=useState(null);
    // const {yourname,schoolname,email}=currentAdmin;

    useEffect(()=>{
        const fetchAdminProfile=async()=>{
            try{
                const email=localStorage.getItem("adminEmail");
                if(!email){
                    setError("email not found");
                    return;
                }
                //make a GET request to fetch admin profile data
                const response=await axios.get('/getadminprofile',{
                    params:{email},
                });
                console.log(response.data);
                setAdminData(response.data);
            }catch(error){
                console.log(error.response.data);
                setError(error.response.data.error);
            }
        };
        fetchAdminProfile();
    },[]); //run only once on component mounts

    // console.log(adminData);
    // if(error){
    //     return <div>{error}</div>
    // }

    return (
        <div>

            <Container className="adminprofile">
                <Card>
                    <h1>Admin Profile</h1>
                    {adminData? (
                    <>
                    <p>Name: {adminData.yourname}</p>
                    <p>School Name: {adminData.schoolname}</p>
                    <p>Email: {adminData.email}</p>
                    </>
                    ):(
                        <p>Loading....</p>
                    )}
                </Card>
            </Container>
       </div>
    );
}