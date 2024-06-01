import React from "react";

import { Container,Col,Row } from "react-bootstrap";
import Card from "../../components/UIelements/Card";
import sciencelab from "../../images/schoolpage/sciencelab.jpg";
import mathematicslab from "../../images/schoolpage/mathematicslab.jpg";
import englishlab from "../../images/schoolpage/englishlab.jpg";
import computerlab from "../../images/schoolpage/computerlab.jpg";
import roboticslab from "../../images/schoolpage/roboticslab.jpg";
import threedlab from "../../images/schoolpage/threedlab.jpg";
import library from "../../images/schoolpage/library.jpeg";
import eboards from "../../images/schoolpage/eboards.jpg";
import firesafety from "../../images/schoolpage/firesafety.png";
import cccameras from "../../images/schoolpage/cccameras.jpg";
import counseller from "../../images/schoolpage/counseller.jpeg";
import sports from "../../images/schoolpage/sports.jpeg";

export default function Facilities(){
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
           <div>
                <h1>About</h1>
                <p>About / Facilities</p>
           </div>
           </div>
           <div>
            <Container style={{padding:'5% 15%'}}>
                <div>
                    <p>STUDENTS ARE OFFERED A WIDE VARIETY OF CLUB ACTIVITIES VIZ LITERARY CLUB,ECO CLUB,MUSIC CLUB,MATHEMATICS CLUB,HEALTH & WELLNESS CLUB,ART & CRAFT CLUB,EVENT MANAGEMENT CLUB,CYBER CLUB,GLOBAL AWARENESS CLUB THROUGH THESE CLUB ACTIVITIES STUDENTS ARE PROVIDED AN OPPURTUNITY TO HONE THIER SKILLS.</p>
                    <h2>Experiential Learning</h2>
                </div>
                <div>
                    <Row style={{display:"flex",justifyContent:"space-between"}}>
                      <Col lg={4}>
                        <Card style={{height:"380px",width:"300px"}}>
                            <img alt="sciencelab" className="cardImage" src={sciencelab}/>
                            <h4>Science Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>The well equipped science lab provides ample scope to develop the scientific temper in students. Abstract concepts come alive and deepen understanding of concepts.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="mathslab" src={mathematicslab}/>
                            <h4>Mathematics Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>Without mathematics, there’s nothing you can do. Everything around you is numbers, was rightly said by the Indian mathematician Shakuntala Devi. Math lab removes mathophobia in students and makes learning math Joyful.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="englishlab" src={englishlab}/>
                            <h4>English Language Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>The language laboratory is a dedicated space for learning English where students access Audio / Audio – Visual material through head sets to master the language.
                            </p>
                        </Card>
                      </Col>  
                    </Row>
                    <br/><br/>
                    <Row style={{display:"flex",justifyContent:"space-between"}}>
                      <Col lg={4}>
                        <Card style={{height:"380px",width:"300px"}}>
                            <img alt="computerlab" className="cardImage" src={computerlab}/>
                            <h4>Computer Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>Computer Science syllabus makes children from classes I to X adept at using computers and linking the subject to other subjects.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="roboticslab" src={roboticslab}/>
                            <h4>Robotics Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>Robotics is an activity based learning where students create robots and also carry out a variety of tasks through programming. It teaches them the skills that are required for crafting precise and accurate instructions and also have fun while learning these valuable lessons.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="3dlab" src={threedlab}/>
                            <h4>3D Lab</h4>
                            <p style={{lineHeight:'1.5rem'}}>3D Education is a 3 dimensional, fully interactive virtual reality which is extensively used by our teachers during regular classroom teaching for Biology, Physics, Chemistry and Mathematics. The 3D experience is a pure delight to the students.
                            </p>
                        </Card>
                      </Col>  
                    </Row>
                    <br/><br/>
                    <Row style={{display:"flex",justifyContent:"space-between"}}>
                      <Col lg={4}>
                        <Card style={{height:"380px",width:"300px"}}>
                            <img alt="library" className="cardImage" src={library}/>
                            <h4>Library</h4>
                            <p style={{lineHeight:'1.5rem'}}>Library is a house of hope, it’s a place where we all can feed our ideas and develop our dreams. The school has library which is a treasure trove of 7,500+ books. It offers the children wide range of reading from school related periodicals to various reference books and encyclopedia.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="e-boards" src={eboards}/>
                            <h4>e-Boards</h4>
                            <p style={{lineHeight:'1.5rem'}}>Most of the classrooms are furnished with interactive digital boards. These high-end digital boards promote meta cognitive learning. The multimedia lessons reinforce the concepts and break the classroom monotony.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="firesafety" src={firesafety}/>
                            <h4>Fire Safety</h4>
                            <p style={{lineHeight:'1.5rem'}}>Practice regular fire escape drills. Teachers will help their students feel more prepared for an actual emergency by walking through the steps of a fire escape drill and explaining why each step is so important.
                            </p>
                        </Card>
                      </Col>  
                    </Row>
                    <br/><br/>
                    <Row style={{display:"flex",justifyContent:"space-between"}}>
                      <Col lg={4}>
                        <Card style={{height:"380px",width:"300px"}}>
                            <img alt="counseller" className="cardImage" src={counseller}/>
                            <h4>Student Counseller</h4>
                            <p style={{lineHeight:'1.5rem'}}>The school provides the facility of an in-house counsellor who is there to resolve issues, for and of the students. Today's children are faced with a plethora of choices, and with the development of technology and absolute globalization, they need a mature mind.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="cccameras" src={cccameras}/>
                            <h4>CC Cameras</h4>
                            <p style={{lineHeight:'1.5rem'}}>Most of the classrooms are furnished with interactive digital boards. These high-end digital boards promote meta cognitive learning. The multimedia lessons reinforce the concepts and break the classroom monotony.
                            </p>
                        </Card>
                      </Col> 
                      <Col lg={4}>
                      <Card style={{height:"380px",width:"300px"}}>
                            <img className="cardImage" alt="sports" src={sports}/>
                            <h4>Sports Facilities</h4>
                            <p style={{lineHeight:'1.5rem'}}>Practice regular fire escape drills. Teachers will help their students feel more prepared for an actual emergency by walking through the steps of a fire escape drill and explaining why each step is so important.
                            </p>
                        </Card>
                      </Col>  
                    </Row>
                </div>
            </Container>
           </div>
        </div>
    )
}