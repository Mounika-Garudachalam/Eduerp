import React,{useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Button from './UIelements/Button'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate();
  const [isClicked,setIsClicked]=useState(false);
  const handleClick=()=>{
    setIsClicked(!isClicked);
    navigate('/managementpage');
  };
  return (
    <section className='header'>
            <div className="header">
                <h1><a id="name" href="/">Kiddy's</a></h1>
                <div>
                  <Button onClick={handleClick}><FontAwesomeIcon style={{marginRight:'8px'}} icon={faUser}/><span/>Management</Button>
                  <Button onClick="/parentslogin"><FontAwesomeIcon style={{marginRight:'8px'}} icon={faUser}/>Parents Login</Button>
                </div>
            </div>
    </section>
  )
}
