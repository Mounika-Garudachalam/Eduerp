import React from 'react'

import Dropdown from '../components/UIelements/Dropdown';
import { aboutDropdown } from '../components/miscellaneous/NavItems';

export default function About() {
  return (
    <div>
      <Dropdown data={aboutDropdown}/>
    </div>
  )
}
