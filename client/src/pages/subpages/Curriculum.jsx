import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container,Row,Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default function Curriculum(){
    return (
        <div>
           <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
           <div>
                <h1>Academics</h1>
                <p>Academics / Curriculum</p>
           </div>
           </div> 
           <div>
            <Container style={{padding:'3% 10%'}}>
                <Col>
                    <p>CURRICULUM</p>
                    <h2>Subjects Offered</h2>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                        <ul>
                            <li><FontAwesomeIcon icon={FaCheck}/><strong>Pre-Primary Level</strong><br/><br/>Literacy skills, Numeracy skills, General Awareness, Conversation Skills, 2nd Language - Hindi / Telugu</li>
                            <li><FontAwesomeIcon icon={FaCheck}/><strong>Primary Level</strong><br/><br/>English, Mathematics, Environmental Science, Social Science, 2nd Language Hindi / Telugu.</li>
                            <li><FontAwesomeIcon icon={FaCheck}/><strong>Middle School</strong><br/><br/>English, Mathematics, Science, Social Science, Artificial Intelligence, 2nd Language Hindi / Telugu, 3rd Language Hindi / Telugu / Sanskrit.</li>
                            <li><FontAwesomeIcon icon={FaCheck}/><strong>Secondary School</strong><br/><br/>
                            English, Mathematics, Science, Social Science, Artificial Intelligence, 2nd Language Hindi / Telugu / Sanskrit</li>
                        </ul>
                        <h2>Examinations & Student Evaluation</h2>
                        <h4>Pre Primary Classes</h4>
                        <p>Students of Pre Primary are evaluated term-wise and promoted on the basis of their overall performance and through continuous comprehensive evaluation and periodic assessments.</p>
                        <h4>Classes I to V</h4>
                        <p>Promotion is made on the basis of overall performance during the year.</p>
                        <h4>Classes VI to X</h4>
                        <p>Students must obtain not less than 40% marks in each subject to be promoted to the next higher level.</p>
                    </Col>
                </Row>
                </Col>
            </Container>
           </div>
        </div>
    )
}