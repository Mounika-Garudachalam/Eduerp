import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import careers from "../images/schoolpage/careers.avif";
import Button from '../components/UIelements/Button';

export default function Careers() {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
        <div>
          <h1>Carrers</h1>
          <p>Home / Careers</p>
        </div>
      </div>
      <div style={{padding:'50px'}}>
        <Container>
          <Row style={{display:'flex'}}>
            <Col style={{marginRight:'50px'}} lg={5}>
              <img className="careerspic" alt="careers" src={careers}/>
            </Col>
            
            <Col lg={7}>
              <h3>Careers</h3>
              <p>We, at Kiddy's Concept School recognize our employees as the most valued resource and 
                biggest asset. We strive to explore their best by creating opportunities for growth 
                and development while maintaining discipline and demeanour in consonance to the culture 
                and values of the school.  </p>
              <h2 style={{fontFamily:'cursive'}}>BE A PART OF OUR FAMILY</h2>
              <Button>Apply Here</Button>
              <Button>Recruitment Notification and Application Form</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
