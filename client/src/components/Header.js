import React from 'react';
import NIT_Andhra_Pradesh from './../images/NIT_Andhra_Pradesh.png';
import {Link} from "react-router-dom";
const Header=()=>{
    return (
        <>
        <div className='header' style={{background:'#C8C8C8'}}>
            <div className='image' style={{display:'flex',justifyContent:"center"}}>
                <img style={{paddingTop:'20px'}} src={NIT_Andhra_Pradesh} height='100px'></img>
            </div>
            <div>
                <h1 style={{textAlign:'center'}}>National Institute of Technology Andhra Pradesh</h1>
            </div>
            <div>
                <p style={{textAlign:'center',paddingBottom:'20px'}}>Near Aerodrome, Tadepalligudem - 534101</p>
            </div>
        </div>
        
        <div  >
            <ul style={{backgroundColor:'	#606060', marginTop:'-20px',height:"50px" ,paddingTop:"10px",paddingBottom:"10px",textAlign:"center",backgroundPosition:"100%"}}>
            <ul style={{display:"inline",paddingRight:"100px",color:"white"}}><Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link></ul>
            <ul style={{display:"inline",paddingRight:"100px",color:"white"}}>About Us</ul>
            <ul style={{display:"inline",paddingRight:"100px",color:"white"}}>Blocks</ul>
            <ul style={{display:"inline",paddingRight:"100px"}}><Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link></ul>
            <ul style={{display:"inline",paddingRight:"100px"}}><Link to="/medium_reg" style={{textDecoration:"none",color:"white"}}>Register</Link></ul>
            </ul>
        </div>
        </>
    );

}
export default Header;
