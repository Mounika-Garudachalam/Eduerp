import React from "react";
import { useNavigate,Link } from "react-router-dom";

import { Container,Row,Col } from "react-bootstrap";
import Button from "../../components/UIelements/Button";
import smsimage from '../Images/smsimage.png';
import '../Styling.css';

export default function ManagementPage(){
    const navigate=useNavigate();
    const handleLogin=()=>{
        navigate('choose');
    }
    return (
        <div>
            <Container style={{padding:'5% 5%'}}>
            <Row style={{display:'flex'}}>
            <Col>
                <img style={{height:'500px'}} alt="smsimage" src={smsimage}/>
            </Col>
            <Col style={{textAlign:'center'}}>
                <h1>Welcome to School Management System</h1>
                <p>Streamline school management, class organization, and add students and faculty.
                Seamlessly track attendance, assess performance, and provide feedback.<br/>
                Access records, view marks, and communicate effortlessly.
                </p>
                <Button onClick={handleLogin}>Login</Button>
                <p>Don't have an account?<Link to="adminregister" style={{textDecoration:'none '}}>Sign up</Link></p>
            </Col>
            </Row>
            </Container>

        </div>
    )
}