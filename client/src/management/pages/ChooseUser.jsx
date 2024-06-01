import React from "react";
import { Link } from "react-router-dom";

import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUser, faUsers} from '@fortawesome/free-solid-svg-icons';
import Card from "../../components/UIelements/Card";

export default function ChooseUser(){
    
    return (
        <Container>
        <Row className="chooseuser">
            <Col>
            <Link style={{textDecoration:'none'}} to="/managementpage/adminlogin">
            <Card className="choosecard">
                <h3><FontAwesomeIcon icon={faUser}/></h3>
                <h1>Admin</h1>
                <p>Login as an administrator to access the dashboard to manage app data.</p>
            </Card>
            </Link>
            </Col>
            <Col>
            <div>
            <Card className="choosecard">
                <h3><FontAwesomeIcon icon={faGraduationCap}/></h3>
                <h1>Student</h1>
                <p>Login as a student to explore course materials and assignments</p>
            </Card>
            </div>
            </Col>
            <Col>
            <div>
            <Card className="choosecard">
                <h3><FontAwesomeIcon icon={faUsers}/></h3>
                <h1>Teacher</h1>
                <p>Login as a teacher to create courses,assignments and track student progress</p>
            </Card>
            </div>
            </Col>
        </Row>
        </Container>
    );
}