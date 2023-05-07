import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import { Link,useNavigate,Navigate, json } from 'react-router-dom';
import './App.css'
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
// import Student from '../../../server/model/studentSchema';
function LoginForm() {
    
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const nav = useNavigate()
    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/student-login", {
                username, password
            })
            .then(res=>{
                if (res.data === "notexist"){
                    alert("incorect details")
                }else{
                    localStorage.setItem("studentdetails",JSON.stringify(res.data))
                    console.log(res.data,"in the console")
                    
                    alert("Login Sucessfull")
                    nav("/student-home")
                }
            })
        }catch(e){
            console.log(e)
        }
    }

    return(
        <>
        <Header/>
        <div className='log'>
            <div class='row person'>
                <div class='col-sm-6 '>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <h2 className='per'>Student Login</h2>
                        </div>
                    </div>
                </div>
                <div class='col-sm-6 '>
                    <form method='POST'>
                    <div class='row'>
                        <div class='col-sm-12'>
                        <div className="form">
          <div className="form-body">
           <div className="username">
                  <label className="form__label" for="username" >Username </label>
                  <input className="form__input" type='text' id="username" autoComplete='off'
                   value={username}
                   onChange={(e) => setusername(e.target.value)}
                   placeholder="Registration Number" />
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" autoComplete='off'
                   value={password}
                   onChange={(e) => setpassword(e.target.value)}
                  placeholder="Password" />
              </div>
          </div>
          <div class="footer">
          <Link to="http://localhost:3000/student-home"><input type="submit" class="btn btn-primary btn-large" name='signin' value={"Login"}
              onClick={submit}
              /></Link>
          </div>
      </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )

}

export default LoginForm;