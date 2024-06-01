import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Form from '../components/UIelements/Form';

export default function Contact() {
  let template={
    fields:[
      {
        element:'input',
        placeholder:'Your Name',
        type:'text',
        name:'Your Name'
      },
      {
        element:'input',
        placeholder:'Your Email',
        type:'text',
        name:'Your Email'
      },{
        element:'input',
        placeholder:'Subject',
        type:'text',
        name:'Subject'
      },{
        element:'textarea',
        placeholder:'Message',
        type:'text',
        name:'Message'
      }
    ]
  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
        <div>
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>
      </div>
      <div>
        <h3 style={{textAlign:'center'}}>GET IN TOUCH</h3>
        <h2 style={{fontFamily:'cursive',textAlign:'center'}}>Contact Us For Any Query</h2>
        <Container>
          <Row style={{display:'flex',justifyContent:'space-around'}}>
            <Col>
              <Form template={template}/>
            </Col>
            <Col>
            <p>Kiddy's Concept School</p>
            <div style={{display:'flex'}}>
                <h3><FontAwesomeIcon icon={faLocationDot}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div>
                  <h3 style={{color:'#17a2b8'}}>Address</h3>
                  <p>Miyapur-Medchal Highway<br/>Near Bachupally,Bowrampet<br/>Hyderabad,Telangana</p>
                </div>
                </span>
              </div>
              
              <div style={{display:'flex'}}>
                <h3 id="x"><FontAwesomeIcon icon={faPhone}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div id="y">
                  <h3 style={{color:'#17a2b8'}}>Phone</h3>
                  <p>+91-9090909090, 1800-425-9999</p>
                </div>
                </span>
              </div>
              <div style={{display:'flex'}}>
                <h3 id="x"><FontAwesomeIcon icon={faEnvelope}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div id="y">
                  <h3 style={{color:'#17a2b8'}}>Email</h3>
                  <p><a style={{textDecoration:'none', color:'black'}} href="/">info@kiddysconceptschool.com</a></p>
                </div>
                </span>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

