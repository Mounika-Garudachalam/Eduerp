import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbarmenu=({title,handleprofile})=>{
    return (
        <div className="navbarmenu">
           <p>{title}</p> 
           <Link onClick={handleprofile}><FontAwesomeIcon className='navicon' icon={faUser}/></Link>
        </div>
    );
}

export default Navbarmenu;