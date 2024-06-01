import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import { staffData } from "../../components/miscellaneous/Data";
import Table from "../../components/UIelements/Table";

export default function Staff(){
    const columns=[
        {field:"sno",header:"S.No"},
        {field:"name",header:"Name"},
        {field:"designation",header:"Designation"},
        {field:"qualification",header:"Qualification"}
    ]
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
            <div>
                <h1>About Us</h1>
                <p>About / Staff</p>
            </div>
            </div>
            <div>
                <Container style={{padding:'5% 15%'}}>
                    <Row>
                        <p>TEACHING STAFF</p>
                        <Col>
                            <Table data={staffData} columns={columns}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}