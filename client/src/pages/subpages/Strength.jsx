import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import Table from "../../components/UIelements/Table";
import { strengthData } from "../../components/miscellaneous/Data";

export default function Strength(){
    const columns=[
        {field:"class",header:"Class"},
        {field:"section",header:"Section"},
        {field:"studentcount",header:"Student Count"}
    ]
    return (
        <div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
            <div>
                <h1>Academics</h1>
                <p>Academics / Strength</p>
            </div>
            </div>
            <div>
                <Container style={{padding:'5% 15%'}}>
                    <Row>
                        <p>STRENGTH</p>
                        <Col lg={12}>
                            <Table data={strengthData} columns={columns}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}