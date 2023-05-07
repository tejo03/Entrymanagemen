import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import { useState } from 'react';
import { Navigate ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
    } from 'mdb-react-ui-kit';
const EditStudentprofile=() =>{
    const user= JSON.parse(localStorage.getItem("studentdetails"));
    const [username,setusername] = useState('')
    const [fullname,setname] = useState('')
    const [YearOfPassOut,setyear] = useState('')
    const [email,setemail] = useState('')
    const [mobilenumber,setphone] = useState('')
    const [password,setpass] = useState('')
    const [semester,setsem] = useState('')
    const [rollnumber,setrollnum] = useState('')
    const [registrationnumber,setregnum] = useState('')
    const [id,setid] = useState('')

    const nav = useNavigate();
    async function submit(e){
        var error = "False";
        setusername(user.username);
        setid(user._id);
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3000/edit-student-profile/${id}`, {
                fullname,username, YearOfPassOut,email, mobilenumber, password, semester,rollnumber,registrationnumber
            })

        }catch(e){
            console.log(e);
        }
    }
    
    return (
        <>
        
        <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">{user.fullname}</p>
                  <p className="text-muted mb-4">{user.email}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Update Profile</MDBBtn>
                    <MDBBtn outline className="ms-1">Options</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
  
             
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.username}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted"><input id="fullname" name="" onChange={(e)=> {setemail(e.target.value)}} type="text" placeholder="Name"/></MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.mobilenumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Current Semester</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.semester}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Registration Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.registrationnumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr/>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Roll Number</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.rollnumber}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <input id="signup" type="submit" onClick={submit}/>
  
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      </>
            
        
        

        
    );
}
export default EditStudentprofile;