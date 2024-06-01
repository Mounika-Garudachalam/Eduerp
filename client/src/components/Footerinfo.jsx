import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Row,Col} from 'react-bootstrap';

import logo from "../images/schoolpage/logo.jpg";

export default function Footerinfo() {
  return (
    <section className="footer-info">
    <Container style={{padding:'3rem'}}>
        <Row style={{display:'flex', justifyContent:'space-between',lineHeight:'4px'}}>
          <Col md={3} lg={4} xl={3}>
            <a style={{fontSize:'35px'}} href='/' className='footer-name'>Kiddy's</a>
            <p>Kiddy's Edu forayed into the field of <br/>education with a one point agenda of <br/>providing a world-class education</p>
          </Col>
          <Col md={2} lg={2} xl={2}>
            <img className="logo" alt="logo" src={logo} />
          </Col>
          <Col  md={3} lg={2} xl={2}>
              <h3>Get In Touch</h3>
              <div style={{display:'flex'}}>
                <h3><FontAwesomeIcon icon={faLocationDot}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div>
                  <h3 style={{color:'#fff'}}>Address</h3>
                  <p>Miyapur-Medchal Highway<br/>Near Bachupally,Bowrampet<br/>Hyderabad,Telangana</p>
                </div>
                </span>
              </div>
              
              <div style={{display:'flex'}}>
                <h3 id="x"><FontAwesomeIcon icon={faPhone}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div id="y">
                  <h3 style={{color:'#fff'}}>Phone</h3>
                  <p>+91-9090909090, 1800-425-9999</p>
                </div>
                </span>
              </div>
              <div style={{display:'flex'}}>
                <h3 id="x"><FontAwesomeIcon icon={faEnvelope}/></h3>
                <span style={{paddingLeft:'20px'}}>
                <div id="y">
                  <h3 style={{color:'#fff'}}>Email</h3>
                  <p><a style={{textDecoration:'none', color:'white'}} href="/">info@kiddysconceptschool.com</a></p>
                </div>
                </span>
              </div>
            </Col>
            <Col md={2} lg={2} xl={2}>
              <h3 style={{fontWeight:'bold'}}>Quick Links</h3>
                <p><a href="/">Home</a></p>
                <p><a href="/">About School</a></p>
                <p><a href="/">Our Teachers</a></p>
                <p><a href="/">Careers</a></p>
                <p><a href="/">Contact Us</a></p>
            </Col>
      </Row>
    </Container>
    </section>
  )
}
