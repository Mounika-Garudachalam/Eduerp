import React,{useState} from "react";

import { Link } from "react-router-dom";
import './Dropdown.css';

function Dropdown({data}){
    const [dropdown,setDropdown]=useState(false);
    
    return (
        <>
        <ul className={dropdown?"submenu clicked":"submenu"} onClick={()=>{setDropdown(!dropdown)}}> 
        {data.map(item=>{
            return (
            <li key={item.id}>
                <Link to={item.path} className={item.className} onClick={()=>setDropdown(false)}>{item.title}</Link>
            </li>
            );
            })}
        </ul>
        </>
    );
        
};

export default Dropdown;