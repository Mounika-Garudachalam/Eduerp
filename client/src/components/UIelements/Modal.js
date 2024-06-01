import React,{useState} from "react";
import {Modal} from "react-bootstrap";
import Button from "./Button";
import Backdrop from "./Backdrop";
import './Modal.css';

export const CustomModal=({show,handleClose,title,body})=>{

    return (
    <>
    <>
    {show && <Backdrop/>}
        <div className="modal">
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
        </> 
    </>
    );
};

export const ProfileModal=({show,handleClose,handlePath,body})=>{
    return (
        <>
        {show && <Backdrop/>}
        <div className="modal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handlePath}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
};

export const AddModal=({show,title,body,handleClose,handlePath})=>{
    return (
        <>
        {show && <Backdrop/>}
        <div className="modal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Title>{title}</Modal.Title>
                <Modal.Body>{body}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handlePath}>Add</Button>
                    <Button onClick={handleClose}>Back</Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    );
};
