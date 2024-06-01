import React from "react";
import {Link} from 'react-router-dom';

import './Button.css';

const Button=props=>{
    if(props.href){
        return (
            <a className={`button`} href={props.href}>
                {props.children}
            </a>
        );
    }
    if(props.to){
        return (
            <Link className={`button`} to={props.to}>
                {props.children}
            </Link>
        );
    }
    return (
        <button className={`button`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;