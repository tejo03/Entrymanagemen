import React, {useState,setState} from 'react';
import {useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios"
import './style_reg.css'
import Header from './Header';
import Footer from './Footer';
function RegistrationForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname:"",username:"",password:"",confirmpassword:"",
    registrationnumber:"",rollnumber:"",email:"",mobilenumber:""
  });
  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.id;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const PostData = async (e) => {
    e.preventDefault();

     const { fullname, username, password, confirmpassword,
     registrationnumber, rollnumber, email, mobilenumber } = user;

    const res = await fetch('http://localhost:5000/student-register',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        fullname, username, password, confirmpassword, registrationnumber, rollnumber, email, mobilenumber
      })

    });

    const data = await res.json();

    if(data.status === 400 || !data ){
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    }
    else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/student-login")
    }
     }
   

    return(
      <>
      <Header/>
        <div className='reg'>
          <h1 style={{textAlign:"center",fontStyle:"italic"}}>Student Registration</h1>
          <form method='POST'>
      <div className="form">
      <div class='row'>
            <div class='col-sm-12'>
          <div className="form-body">
            <div class='row'>
                <div class='col-sm-6'>
                <div className="fullname">
                  <label className="form__label" for="fullname">Full Name </label>
                  <input className="form__input" type="text" id="fullname" autoComplete='off'
                   value={user.fullname}
                   onChange={handleInputs}
                   placeholder="Enter Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" autoComplete='off'
                   value={user.password}
                   onChange={handleInputs}
                   placeholder="Password"/>
              </div>
              </div>
              <div class='col-sm-6'>
                <div className="username">
                  <label className="form__label" for="username">Username </label>
                  <input className="form__input" type='number' id="username" autoComplete='off' 
                  value={user.username}
                  onChange={handleInputs}
                  placeholder="Enter Registration Number"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmpassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmpassword" autoComplete='off' 
                  value={user.confirmpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"/>
              </div>
              </div>
            </div>
            <div class='row'>
                <div class='col-sm-6'>
                <div className="registration-number">
                  <label className="form__label" for="registrationnumber">Registration Number </label>
                  <input className="form__input" type="number" id="registrationnumber" autoComplete='off' 
                  value={user.registrationnumber}
                  onChange={handleInputs}
                  placeholder="Enter Registration Number"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input type="email" id="email" className="form__input" autoComplete='off' 
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="Enter Email"/>
              </div>
              {/* <div className="gender">
                 <label className="form__label" for="gender">Gender </label>
                  <select ref={gender} name='gender' id='gender' required
                >
                  <option hidden disabled selected value>Choose Gender</option>
                  <option id='gender' value={"Male"}>Male</option>
                  <option id='gender' value={"Female"}>Female</option>
                  </select>
              </div> */}
              {/* <div className="currentyear">
                  <label className="form__label" for="currentyear">Current Year </label>
                  <input ref={currentyear} className="form__input" type="number" id="currentyear" autoComplete='off' 
                 
                  placeholder="Ex: 1" min="1" max="4"/>
              </div> */}
              </div>
              <div class='col-sm-6'>
                <div className="rollnumber">
                  <label className="form__label" for="rollnumber">Roll Number </label>
                  <input className="form__input" type="number" id="rollnumber" autoComplete='off' 
                  value={user.rollnumber}
                  onChange={handleInputs}
                  placeholder="Roll Number"/>
              </div>
              <div className="mobile-number">
                  <label className="form__label" for="mobilenumber">Mobile Number </label>
                  <input className="form__input" type="number" id="mobilenumber" autoComplete='off' 
                  value={user.mobilenumber}
                  onChange={handleInputs}
                  placeholder="Enter Mobile Number"/>
              </div>
               {/* <div className="course">
                 <label className="form__label" for="course">Course </label>
                  <select ref={course} name='course' id='course' required>
                  <option hidden disabled selected value>Choose Course</option>
                  <option id="course"value={"B.Tech"}>B Tech</option>
                  <option id='course' value={"M.Tech"}>M Tech</option>
                  <option id="course"value={"PhD"}>PhD</option>
                  </select>
              </div>  */}
               {/* <div className="branch"> 
                 <label className="form__label" for="branch">Branch </label>
                  <select ref={branch} name='branch' id='branch' required
                  >
                  <option hidden disabled selected value>Choose Branch</option>
                  <option id="branch" value={"CSE"}>CSE</option>
                  <option id="branch" value={"ECE"}>ECE</option>
                  <option id='branch' value={"EEE"}>EEE</option>
                  <option id='branch' value={"Mechanical"}>Mechanical</option>
                  </select>
              </div> */}
              </div>
            </div>   
          </div>
          </div>
          </div>
          <div class="footer">
              
              <input type="submit" name='register' id='register' class="btn btn-primary btn-large" value={"Register"}
              onClick={PostData}/>
          </div>
      </div> 
      </form>
      </div> 
      <Footer/>
      </>    
    )       
}
export default RegistrationForm;