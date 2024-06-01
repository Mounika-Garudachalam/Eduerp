import React from 'react'
import { useState,useEffect } from 'react';
import {Container, Row, Col} from "react-bootstrap";

import Card from '../components/UIelements/Card'
import kids from "../images/schoolpage/kids.jpeg";
import { SliderData } from '../components/miscellaneous/sliderData';
import { FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faPersonCircleQuestion, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    const [current,setCurrent]=useState(0);

    useEffect(()=>{
      const interval=setInterval(()=>{
        nextSlide();
      },3000);  
      /*change the 3000 to desired interval in milliseconds for autoplay*/
      return ()=>clearInterval(interval);
    },[current]);

    const length=SliderData.length;
    const nextSlide=()=>{
      setCurrent(current===length-1?0:current+1);
    };
    const prevSlide=()=>{
      setCurrent(current===length-1?0:current-1);
    };
  return (
  <div>

  <Container>
    <Row className='slider' style={{display:'flex', justifyContent:'space-between'}}>
      <Col lg={7}>
        {/* <div style={{justifyContent:"space-between"}}> */}
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
        {/* </div> */}
        <div className='slider'>
          {SliderData.map((slide,index)=>{
            return (
              <div className={index===current?'slide active':'slide'} key={index}>
                {index===current && (
                  <img src={slide.image} alt='pic' className='image'/>
                )}
              </div>
            );
          })}
        </div>
      </Col>
      <Col className='slidercol' lg={5}>
        <h4 style={{fontSize:'25px'}}>Kiddy's Concept School</h4>
        <h1 style={{fontSize:'55px', fontFamily:'handlee cursive'}}>Grow, Learn, Achieve Together</h1>
        <p>Kiddy's concept school offers you an enriched National Curriculum-Central Board of Secondary Education (CBSE), Hyderabad</p>
      </Col>
    </Row>
  </Container>
  <Container style={{padding:'3% 10%'}}>
    <Container>
      <Row style={{display:'flex', justifyContent:'space-between'}}>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card style={{height:"200px", width:"300px",display:"flex"}}>
          <h3><FontAwesomeIcon icon={faEye}/></h3>
          <span style={{paddingLeft:'20px'}}>
          <div>
            <h2>Vision</h2>
            <p>To create learner-centric environment where every child progresses confidently with knowledge, skills and values.</p>
          </div>
          </span>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card style={{height:"200px", width:"300px",display:"flex"}}>
              <h3><FontAwesomeIcon icon={faPersonCircleQuestion}/></h3>
              <span style={{paddingLeft:'20px'}}>
              <div>
                <h2>Mission</h2>
                <p>To educate students to lead fulfilling and productive lives for the good of the society</p>
              </div>
              </span>
          </Card>         
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card style={{height:"200px", width:"300px",display:"flex"}}>
          <h3><FontAwesomeIcon icon={faQuoteLeft}/></h3>
          <span style={{paddingLeft:'20px'}}>
              <div>
                <h2>Motto</h2>
                <p>Learn to serve</p>
              </div>
          </span>
          </Card>
        </Col>
        </Row>
        <br/>
        <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Card className="card4">
            <h2>Notice Board</h2>
            <h6>Updated on 17<sup>th</sup> January, 2024</h6>
              <p><a href='/'>Recruitment Notification and Application Form</a></p>
              <p><a href='/'>Academic Calender 2023-2024</a></p>
              <p><a href='/'>Telangana Formation Day Celebrations 2023</a></p>
              <p><a href='/'>Transfer Certificates(2022-2023)</a></p>
              <p><a href='/'>For the academic year 2023-2024, here are the recommended textbooks for classes Nursery to class X</a></p>
              <p><a href='/'>Fee Structure for the Academic year 2023-2024</a></p>
          </Card>
        </Col>
        </Row>
    </Container>
    <Container>
      <Row style={{display:'flex',justifyContent:'space-between', padding:'4rem'}}>
        <Col style={{padding:'1.5rem'}} lg={5}>
            <img src={kids} alt="kids"></img>
        </Col>
        <Col lg={7} style={{padding:'1rem'}}>
          <h3>LEARN ABOUT US</h3>
          <h1>A Tradition of Excellence.....</h1>
          <p>Kiddy's concept school was established in August 2010 and has a rich legacy of close to a decade in imparting
            quality education. This school continues to strive towards its vision and goals with the goodwill
            and cooperation of the local intelligensia.</p>
          <p>The school is a vivid manifestation of our motto 'LEARN TO SERVE' and is dedicated to the service 
            of the nation by moulding and developing students to be worthy citizens of tomorrow.</p>
          <p>The school is committed to preparing the students for a technology- led future </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <div><h3 style={{textAlign:'center'}}>OPPORTUNITIES FOR LIFELONG LEARNING</h3>
      <h1 style={{textAlign:'center'}}>Kiddy's Concept School</h1></div>
      <Row style={{display:'flex',justifyContent:'space-between'}}>
        <Col>
          <Card>
            <h2>Events Gallery</h2>
            <ul>
              <li><a href="/">Report on Olympic day (2023)|Photos</a></li>
              <li><a href="/">Telangana formation day celebrations(2023)|Photos</a></li>
              <li><a href="/">Independance day celebrations(2023)|Photos</a></li>
            </ul>
          </Card>
        </Col>
        <Col>
          <Card>
          <h2>Mandatory Disclosure</h2>
            <ul>
              <li><a href="/">No Objection Certificate</a></li>
              <li><a href="/">Fire Safety Measures</a></li>
              <li><a href="/">Building Stability Certificate</a></li>
              <li><a href="/">Sanitary Certificate</a></li>
              <li><a href="/">Drinking water certificate</a></li>
              <li><a href="/">State Govt. Affiliation Certificate</a></li>
              <li><a href="/">DEO Certifcate</a></li>
              <li><a href="/">School management committee </a></li>
              <li><a href="/">Parent Teacher Association</a></li>
            </ul>
          </Card>
        </Col>
        <Col>
          <Card>
          <h2>Quick Links</h2>
            <ul>
              <li><a href="/">Online fee payment</a></li>
              <li><a href="/">Parent/Student Login</a></li>
              <li><a href="/">Result Analysis-2023</a></li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
    </Container>
  </div>
  )
}
