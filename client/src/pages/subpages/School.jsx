import React from "react";

import { Container,Col,Row } from "react-bootstrap";
import image5 from "../../images/schoolpage/image5.png";

export default function School(){
    return (
        <div>
           <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
           <div>
                <h1>About US</h1>
                <p>About / School</p>
           </div>
           </div> 
           <div>
            <Container style={{padding:'5% 15%'}}>
                <Row style={{display:'flex',alignItems:'center'}}>
                    <Col lg={5}>
                        <img className="image5pic" alt="school" src={image5}/>
                    </Col>
                    <Col lg={7}>
                        <p>LEARN ABOUT US</p>
                        <h2>Best School for your Kids</h2>
                        <p>Kiddy's concept school was established in August 2010 and has a rich legacy of close to a decade in imparting quality education. This school continues to strive towards its vision and goals with the goodwill and cooperation of the local intelligensia.</p>
                        <p>The school is a vivid manifestation of our motto 'LEARN TO SERVE' and is dedicated to the service of the nation by moulding and developing students to be worthy citizens of tomorrow.</p>
                        <p>The school is committed to preparing the students for a technology- led future </p>
                    </Col>
                </Row>
            </Container>
           </div>
        </div>
    )
}