import React,{useState} from 'react';
import {Routes, Route, BrowserRouter,useNavigate} from 'react-router-dom'
import axios from 'axios';

//links and routes
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact.jsx';
import Careers from './pages/Careers';
import Ptassociation from './pages/subpages/Ptassociation.jsx';
import './App.css';
import Footerinfo from './components/Footerinfo';
import Admissionprocedure from './pages/subpages/Admissionprocedure.jsx';
import Curriculum from './pages/subpages/Curriculum.jsx';
import Strength from './pages/subpages/Strength.jsx';
import Staff from './pages/subpages/Staff.jsx';
import School from './pages/subpages/School.jsx';
import Facilities from './pages/subpages/Facilities.jsx';
import ManagementPage from './management/pages/ManagementPage.jsx';
import ChooseUser from './management/pages/ChooseUser.jsx';
import AdminRegister from './management/pages/Admin/AdminRegister.jsx';
import AdminLogin from './management/pages/Admin/AdminLogin.jsx';
// admindashboard
import Sidebarmenu from './management/styling/Sidebarmenu.jsx';
import AdminHome from './management/pages/Admin/Admindashboard/AdminHome.jsx';
import AdminClass from './management/pages/Admin/Admindashboard/classRelated/AdminClass.jsx';
import AdminStudent from './management/pages/Admin/Admindashboard/studentrelated/AdminStudent.jsx';
import AdminNotice from './management/pages/Admin/Admindashboard/noticerelated/AdminNotice.jsx';
import AdminTeacher from './management/pages/Admin/Admindashboard/teacherRelated/AdminTeacher.jsx';
import AdminSubject from './management/pages/Admin/Admindashboard/subjectRelated/AdminSubject.jsx';
import AdminProfile from './management/pages/Admin/Admindashboard/AdminProfile.jsx';
import Navbarmenu from './management/styling/Navbarmenu.jsx';
import { ProfileModal } from './components/UIelements/Modal.js';
import './management/Styling.css';
import ShowNotices from './management/pages/Admin/Admindashboard/noticerelated/ShowNotices.jsx';

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout/>}/>
        <Route path="/managementpage/*" element={<ManagementHomepage/>}/>
        <Route path="/admindashboard/*" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  ) ;
}

function ManagementHomepage(){
  return (
    <>
      <Routes>
        <Route index element={<ManagementPage/>} />
        <Route path='choose' element={<ChooseUser/>}/>
        <Route path='adminlogin' element={<AdminLogin/>}/>
        <Route path='adminregister' element={<AdminRegister/>}/>
      </Routes>
    </>
  );
}

function AdminPage(){
  const navigate=useNavigate();
  const [showModal,setShowModal]=useState(false);
    const profile=()=>{
      setShowModal(true);
    }
    const handlePathModal=()=>{
      navigate('/');
    }
    const handleCloseModal=()=>setShowModal(false);
  return (
    <>
      <Navbarmenu title='Admin Dashboard' handleprofile={profile}/>
      <div className='admin'>
      <Sidebarmenu/>
      <div className='admin-content'>
      <Routes>
            <Route index element={<AdminHome/>}/>
            <Route path='adminprofile' element={<AdminProfile/>}/>
            <Route path='adminclass' element={<AdminClass/>}/>
            <Route path='adminsubject' element={<AdminSubject/>}/>
            <Route path='adminteacher' element={<AdminTeacher/>}/>
            <Route path='adminstudent' element={<AdminStudent/>}/>
            <Route path='adminNotice' element={<AdminNotice/>}/>
            <Route path='notices' element={<ShowNotices/>}/>
            <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
      </div>
      <ProfileModal show={showModal} 
                    body="Do you want to logout?"
                    handleClose={handleCloseModal}
                    handlePath={handlePathModal}/>
    </>
  );
}

function NotFound(){
  return <h1>Not Found</h1>;
}

function MainLayout(){
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        {/* about us */}
        <Route path='about/ptassociation' element={<Ptassociation/>} />
        <Route path='about/staff' element={<Staff/>} />
        <Route path='about/school' element={<School/>} />
        <Route path='about/facilities' element={<Facilities/>}/>
        {/* academics */}
        <Route path='academics/admissionprocedure' element={<Admissionprocedure/>}/>
        <Route path='academics/curriculum' element={<Curriculum/>}/>
        <Route path='academics/strength' element={<Strength/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='careers' element={<Careers/>} />
    
      </Routes>
      {/* {<Content/>} */}
      <Footerinfo/>
      <Footer/>
    </>
  );
}


export default App;


 