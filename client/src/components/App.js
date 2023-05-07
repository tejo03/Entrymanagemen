import React from 'react';
import './App.css';

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Medium from './medium';
import Login from './Login';
import Border from './Border';
import RegistrationForm from './registration';
import Medium_reg from './Medium_reg';
import LoginForm from './student_login';
import StudentHome from './student_home';
import EditStudentprofile from './editStudentProfile';
import RegistrationForm1 from './security_registration';
import LoginForm1 from './security_login';
import SecurityHome from './security_home';
import VisitorEnroll from './visitor_enroll';

// import Errorpage from './Errorpage'

function App() {
 
  return (
    
    // <div >
    //   <Header />
    //   <Footer />
     
    // </div>
    <Router>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/idk" element={<Login/>}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Medium/>}/>
        <Route path="/medium_reg" element={<Medium_reg/>}/>
        <Route path="/border" element={<Border/>}/>
        <Route path="/student-register" element={<RegistrationForm/>}/>
        <Route path="/student-login" element={<LoginForm/>}/>
        <Route path="/student-home" element={<StudentHome/>}/>
        <Route path="/edit-student-profile" element={<EditStudentprofile/>}/>
        <Route path='/security-register' element={<RegistrationForm1/>}/>
        <Route path="/security-login" element={<LoginForm1/>}/>
        <Route path="/security-home" element={<SecurityHome/>}/>
        <Route path="/visitor-enroll" element={<VisitorEnroll/>}/>
      </Routes>
    </Router>
  );
}

export default App;

// export default App;
