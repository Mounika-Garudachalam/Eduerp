import React from "react";

import { Container,Row,Col } from "react-bootstrap";

export default function Admissionprocedure(){
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
            <div>
                <h1>Academics</h1>
                <p>Academics / Admission Procedure</p>
            </div>
            </div>
            <div>
            <Container style={{padding:'3% 10%'}}>
                <Row style={{display:'flex',alignItems:'center',lineHeight:'1.5rem'}}>
                    <Col lg={3}>
                        <p>Admission Procedure</p>
                    </Col>
                    <Col lg={9}>
                        <p>ADMISSION PROCEDURE</p>
                        <h2>Application and Registration</h2>
                        <ol>
                            <li><strong>Commencement of academic year:New academic session commences from 1st April.</strong></li>
                            <li>Application forms are issued by the school office in the month of December for Pre Primary (including Nursery) and from January to March for other classes if vacancies exist. Applications forms can be obtained on payment of the prescribed fee on all working days between 9:00am. to 3:00pm.</li>
                            <li>The filled in application should be submitted in the school office with all the enclosures and a registration fee of Rs. 500/- on or before the date specified by the school. The registration fee once paid will not be refunded nor adjusted for any other purpose. Mere registration does not guarantee admission.</li>
                            <li>Particulars of age for admission are as follows:<br/>
                                Pre Primary 1: 4 years<br/>
                                Pre Primary II: 5 years<br/>
                                Class I: 6 years<br/>
                                A child must be six years old as on 1st April of the academic year for admission to class I.</li>
                            <li>For registration a copy of the Birth Certificate issued by the competent authority, as given below, is required:
                                <ul>
                                    <li>Birth Certificate issued by the Municipal Corporation / M.R.O</li>
                                    <li>T.C with relevant entry of date of birth for admission into class II and above.</li>
                                    <li>The original certificate in support of date of birth or T.C shall however be submitted to the school positively at the time of admission.</li>
                                    <li>Assessment will be conducted in the following subjects:</li>
                                    <ul>
                                        <li>Primary School : English, Hindi, EVS & Math</li>
                                        <li>Middle School :English, Math, Science, Social Science, Hindi & Telugu</li>
                                        <li>Secondary School : Hindi, English, Math, Social Science, Science, Hindi & Telugu</li>
                                    </ul>
                                </ul>
                            </li>
                        </ol>
                        <h2>Withdrawls</h2>
                        <ol>
                            <li>Once admitted, withdrawal of the student will be permitted only after a clear calendar month’s notice or payment of the term fee in lieu thereof, besides clearance of all the dues, other than regular school fees, for issuing Transfer Certificate.</li>
                        <li>The student’s name will be struck off the rolls on the following grounds without any notice:</li>
                        <ul>
                            <li>Indiscipline</li>
                            <li>Non-payment of fees</li>
                            <li>Unauthorised absence from school for more than 15 days.</li>
                        </ul>
                        </ol>
                        <h2>Code of Conduct</h2>
                        <p>Every student admitted to the school should adhere to the code of conduct.</p>
                        <ol>
                            <li>Paying due respect to the teachers and elders in or outside the school campus.</li>
                            <li>Must not go out of the class / school during school hours without the permission of the Teacher / Principal.</li>
                            <li>Complete discipline to be maintained during assembly and at all other times</li>
                            <li>Must not disfigure or damage walls, furniture and other school property.</li>
                            <li>Must develop the habit of punctuality and regularity.</li>
                            <li>He / She must not abstain from the periodic tests and other assessments without obtaining permission from the Principal.</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}