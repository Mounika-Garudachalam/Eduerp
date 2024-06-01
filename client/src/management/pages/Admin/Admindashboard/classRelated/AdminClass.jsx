import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Button from '../../../../../components/UIelements/Button';
import { AddModal } from '../../../../../components/UIelements/Modal';
import classroom from '../../../../Images/classroom.avif';

export default function AdminClass(){
    const navigate=useNavigate();
    const [showModal,setShowModal]=useState(false);
    const handleCloseModal=()=>setShowModal(false);
    const handlePathModal=()=>{
        navigate('/');
    }
    const handleClass=()=>{
        setShowModal(true);
    }
    return (
        <Container>
            <Button onClick={handleClass}>Add Class</Button>
            <AddModal
            show={showModal}
            title='Add class'
            body={
                <img  style={{height:'200px',width:'400px'}} src={classroom} alt='classroom'/>
            }
            handlePath={handlePathModal}
            handleClose={handleCloseModal}
            />
        </Container>
    );
}