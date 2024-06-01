import React from 'react'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../images/schoolpage/logo.jpg";
import { Container,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {navItems} from './miscellaneous/NavItems';
import Button from './UIelements/Button';
import About from '../pages/About';
import Academics from '../pages/Academics';

export default function Navbartab() {
  const [aboutDropdownOpen,setAboutDropdownOpen]=useState(false);
  const [academicsDropdownOpen,setAcademicsDropdownOpen]=useState(false);
  // const [closeTimeout,setCloseTimeout]=useState(null);

  const handleMouseOver=(item)=>{
    if(item.title==="About"){
      setAboutDropdownOpen(true);
      setAcademicsDropdownOpen(false);
    }
    else if(item.title==="Academics"){
      setAboutDropdownOpen(false);
      setAcademicsDropdownOpen(true);
    }
  };

  const handleMouseLeave=()=>{
    setAboutDropdownOpen(false);
    setAcademicsDropdownOpen(false);  
  };

  return (
   
    <section className='navigation'>
        <nav>
          <Container >
          {/* <Navbar.Toggle/> */}
          {/* <Navbar.Collapse> */}
          
          <Row className='navbar' style={{display:'flex'}}>
         
          <Col>
            <img className="logo" alt="logo" src={logo} />
          </Col>
          <Col style={{display:'flex',alignItems:'center'}}>
          <ul className='nav-items'>
            
            {navItems.map(item=>{
              if(item.title==="Academics" || item.title==="About"){
                return (
                  <li key={item.id} onMouseLeave={handleMouseLeave}>
                      <Link className={item.className} to={item.path} onMouseOver={()=>handleMouseOver(item)}>{item.title}
                        <FontAwesomeIcon style={{marginLeft:'5px'}} icon={faCaretDown}/>
                      </Link>
                    {academicsDropdownOpen && (item.title==="Academics"?<Academics/>:null)}
                    {aboutDropdownOpen && (item.title==="About"?<About/>:null)}
                  </li>
                  );
              }
              else{
              return (
              <li key={item.id}>
                <Link className={item.className} to={item.path}>{item.title}</Link>
              </li>
              );
            }
            })}
          </ul>
          <Button>Online Fee</Button>
          </Col>
          </Row>
         
          </Container>
        </nav>
    </section>
  )
}
