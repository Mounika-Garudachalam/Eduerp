import React from "react";

import   Dropdown  from "../components/UIelements/Dropdown";
import { academicsDropdown } from "../components/miscellaneous/NavItems";

export default function Academics(){
    return (
        <div>
            <Dropdown data={academicsDropdown}/>
        </div>
    )
}