import React from 'react';

import { Link } from 'react-router-dom';
import {Sidebar,Menu,MenuItem} from "react-pro-sidebar";
import { adminsidebar } from '../miscellaneous/Sidebaritems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebarmenu() {
  return (
    <div>
      <Sidebar className='sidebar'>
        <Menu>
            {adminsidebar.map(item=>(
              <Link to={item.path} key={item.id} style={{textDecoration:'none'}}>
                <MenuItem>
                  <FontAwesomeIcon className="icon" icon={item.icon}/>
                  {item.title}
                </MenuItem>
              </Link>
            ))}   
        </Menu>
      </Sidebar>
    </div>
  )
}
