import React, {useState,setState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from "axios"
import './style_reg.css'
import Header from './Header';
import Footer from './Footer';
function RegistrationForm1() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
    fullName:"",userName:"",Password:"",confirmPassword:"",
    employeeid:"",Email:"",gender:"",mobileNumber:""
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

     const { fullName, userName, Password, confirmPassword,
     employeeid, Email, gender, mobileNumber } = user;

    const res = await fetch('http://localhost:5000/security-register',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        fullName, userName, Password, confirmPassword, employeeid, Email, gender, mobileNumber
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
      navigate("/security-login")
    }
     }

    return(
      <>
      <Header/>
        <div className='reg'>
          <h1 style={{textAlign:"center",fontStyle:"italic"}}>Security Registration</h1>
          <form method='POST'>
      <div className="form">
      <div class='row'>
            <div class='col-sm-12'>
          <div className="form-body">
            <div class='row'>
                <div class='col-sm-6'>
                <div className="fullname">
                  <label className="form__label" for="fullName">Full Name </label>
                  <input className="form__input" type="text" id="fullName" autoComplete='off'
                   value={user.fullName}
                   onChange={handleInputs}
                   placeholder="Enter Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="Password">Password </label>
                  <input className="form__input" type="password"  id="Password" autoComplete='off'
                   value={user.Password}
                   onChange={handleInputs}
                   placeholder="Password"/>
              </div>
              </div>
              <div class='col-sm-6'>
                <div className="username">
                  <label className="form__label" for="userName">Username </label>
                  <input className="form__input" type='text' id="userName" autoComplete='off' 
                 value={user.userName}
                 onChange={handleInputs}
                  placeholder="Enter Employee Id"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" autoComplete='off' 
                 value={user.confirmPassword}
                 onChange={handleInputs}
                  placeholder="Confirm Password"/>
              </div>
              </div>
            </div>
            <div class='row'>
                <div class='col-sm-6'>
                <div className="registration-number">
                  <label className="form__label" for="employeeid">Employee ID </label>
                  <input className="form__input" type="text" id="employeeid" autoComplete='off' 
                   value={user.employeeid}
                   onChange={handleInputs}
                  placeholder="Enter Employee ID"/>
              </div>
              <div className="email">
                  <label className="form__label" for="Email">Email </label>
                  <input type="email" id="Email" className="form__input" autoComplete='off' 
                   value={user.Email}
                   onChange={handleInputs}
                  placeholder="Enter Email"/>
              </div>
              
              </div>
              <div class='col-sm-6'>
                 <div className="gender">
                  <label className="form__label" for="gender">Gender </label>
                  <input className="form__input" type="text" id="gender" autoComplete='off' 
                   value={user.gender}
                   onChange={handleInputs}
                  placeholder="'M' for male, 'F' for female"/>
              </div> 
              <div className="mobile-number">
                  <label className="form__label" for="mobileNumber">Mobile Number </label>
                  <input className="form__input" type="number" id="mobileNumber" autoComplete='off' 
                  value={user.mobileNumber}
                  onChange={handleInputs}
                  placeholder="Enter Mobile Number"/>
              </div>
              
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
export default RegistrationForm1;