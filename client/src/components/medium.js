import React from 'react';
import {Link} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
const Medium=() =>{
    const style1 = {float: 'left'};
    const style2 = {float: 'right'};
    const style3 = {width: '33%'};
    const style4=  {height:'68vh'};
    return (
         <div >
            <Header/>
            <div style={{...style4}}>
            <div style={{marginTop:"-20px"}} >
                <Link to="/student-login">
                    <img  style={{...style1,...style3,...style4}} src="https://st2.depositphotos.com/3889193/6856/i/450/depositphotos_68564721-stock-photo-beautiful-young-student-posing.jpg" alt="https://st2.depositphotos.com/3889193/6856/i/450/depositphotos_68564721-stock-photo-beautiful-young-student-posing.jpg" ></img>
                </Link>
                
                
            </div>
            <div >
                <Link to="/login">
                    <img style={{...style1,...style3,...style4}} src="https://media.istockphoto.com/id/1365527907/photo/portrait-of-smiling-mature-teacher-with-laptop-in-the-classroom.jpg?b=1&s=170667a&w=0&k=20&c=bdm3SF-MxizO0OEeY5KiUReUL7vludvuKgVgiF5WXH4=" alt="notfound"></img>
                </Link>
            </div>
            <div >
                <Link to="/security-login">
                    <img style={{...style2,...style3,...style4}}  src="https://media.gettyimages.com/id/531146987/photo/woman-and-man-security-guard.jpg?s=612x612&w=gi&k=20&c=dBgNGW52NUtn_ZGfK5L0WUrunPkRf8AmyQZ1JvFTJ9U=" alt="notfound"></img>
                </Link>

            </div>
            </div>
            <Footer/>
            </div>
           
            
        
            
        
        

        
    );
}
export default Medium;