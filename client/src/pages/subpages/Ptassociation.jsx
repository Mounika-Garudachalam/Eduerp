import React from 'react';

import { Container,Row,Col } from 'react-bootstrap';
import Table from '../../components/UIelements/Table';
import { ptData } from '../../components/miscellaneous/Data';

export default function Ptassociation(){
    const columns=[
        {field:"sno",header:"S.No"},
        {field:"nom",header:"Name of the Member"},
        {field:"category",header:"Category"}
    ]
    return (
    <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#17a2b8', color:'#fff',height:'150px'}}>
        <div>
          <h1>About Us</h1>
          <p>About / Parent Teacher Association</p>
        </div>
        </div>
        <div>
            <Container style={{padding:'5% 15%'}}>
                <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Col>
                        PARENT-TEACHER ASSOCIATION 2023-24
                    </Col>
                    <Col>
                        <p>PARENT-TEACHER ASSOCIATION 2023-24</p>
                        <h1>PARENT-TEACHER ASSOCIATION 2023-24</h1>
                        <Table data={ptData} columns={columns}/>
                        {/* <table>
                            <tbody>
                                <tr>
                                    <td>S.NO</td>
                                    <td>NAME OF THE MEMBER</td>
                                    <td>CATEGORY</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
}