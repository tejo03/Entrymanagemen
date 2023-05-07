import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import { useState } from 'react';
import Medium from './medium';
import { useNavigate } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const VisitorEnroll=() =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
    fullname:"",city:"",mobilenumber:"",anyrelation:"",student:"",reason:""
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

     const {  fullname, mobilenumber,city,anyrelation,student,reason  } = user;

    const res = await fetch('http://localhost:5000/visitor-enroll',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        fullname, mobilenumber,city,anyrelation,student,reason 
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
      navigate("/security-home")
    }
     }
    return (
        <>

    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted"><input type="String"  id="anyrelation" autoComplete='off' value={user.anyrelation} onChange={handleInputs} placeholder="anyrelation"/></MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted"><input type="String"  id="fullname" autoComplete='off' value={user.fullname} onChange={handleInputs} placeholder="fullname"/></MDBCardText>
                      </MDBCol>
                      
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted"><input type="Number"  id="mobilenumber" autoComplete='off' value={user.mobilenumber} onChange={handleInputs} placeholder="mobilenumber"/></MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted"><input type="String"  id="city" autoComplete='off' value={user.city} onChange={handleInputs} placeholder="city"/></MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted"><input type="Number"  id="mobilenumber" autoComplete='off' value={user.mobilenumber} onChange={handleInputs} placeholder="mobilenumber"/></MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted"><input type="String"  id="reason" autoComplete='off' value={user.reason} onChange={handleInputs} placeholder="reason"/></MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted"><input type="submit" name='enroll' id='enroll' class="btn btn-primary btn-large" value={"Enroll"}
              onClick={PostData}/></MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
 
        </>
        
        

        
    );
}
export default VisitorEnroll;