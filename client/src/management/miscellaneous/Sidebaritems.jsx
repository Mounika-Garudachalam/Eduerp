import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

export const adminsidebar=[
    {
        id:1,
        icon:faHouse,   //font awesome class for home icon
        title:'Home',
        path:'.',
        className:'sidebar-item'
    },
    {
        id:2,
        icon:faLandmark, 
        title:'Classes',
        path:'./adminclass',
        className:'sidebar-item'
    },
    {
        id:3,
        icon:faClipboard, 
        title:'Subjects',
        path:'./adminsubject',
        className:'sidebar-item'
    },
    {
        id:4,
        icon:faPersonChalkboard, 
        title:'Teachers',
        path:'./adminteacher',
        className:'sidebar-item'
    },
    {
        id:5,
        icon:faUser, 
        title:'Students',
        path:'./adminstudent',
        className:'sidebar-item'
    },
    {
        id:6,
        icon:faCircleInfo, 
        title:'Notices',
        path:'./adminnotice',
        className:'sidebar-item'
    },
    {
        id:7,
        icon:faUser, 
        title:'Profile',
        path:'./adminprofile',
        className:'sidebar-item'
    }
];