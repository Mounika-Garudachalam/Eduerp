import React from 'react'

//dependencies
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <section className='footer'>
    <div className="footer"> 
      <ul>      
          <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul> 
          <p>Copyright © Kiddy's | All rights reserved</p> 
    </div>
    </section>
  )
} 
