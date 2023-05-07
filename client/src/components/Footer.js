// import React from 'react';
import NIT_Andhra_Pradesh from '../images/NIT_Andhra_Pradesh.png'
// const Footer=() =>{
  
    

//     return (
       
//         <div >
//             <div>
//                 <div style={{display:"inline",float:"left"}}>
//                     <img src={NIT_Andhra_Pradesh}></img>
//                 </div>
//                 <div style={{display:"inline",float:"left", textAlign:"center"}}>
//                     <h1>National Institute of Technology</h1>
//                     <h2>Andhra Pradesh</h2>
//                 </div>
//             </div>
               
        
                

//         </div>
        

        
//     );
// }
// export default Footer;
import React from "react";
import "./App.css";

function Footer() {
  return (
    // <div className="main-footer">
    //   <div className="container">
    //     <div className="row">
    //       {/* Column1 */}
    //       <div className="col">
    //         <img style={{display:"flex",alignContent:"center",paddingLeft:"80px"}} src={NIT_Andhra_Pradesh} height='100px'></img>
    //         <h1 className="list-unstyled">
    //           <li>National Institute of Technology</li>
    //           <li >ANDHRA PRADESH</li>
    //         </h1>
    //       </div>
          
    //       {/* Column3 */}
    //       <div className="col" style={{paddingLeft:"150px"}}>
    //         <h4>CONTACT US</h4>
    //         <ui className="list-unstyled" >
    //           <li>E-mail:nxxxxxx.nitandhra.ac.in</li>
    //           <li>Ph.no: 9XXXXXXXXX</li>
    //           <li>Pincode - 534101</li>
    //         </ui>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className="row">
    //       <p className="col-sm">
    //          ESTABLISHED IN THE YEAR 2015
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
    <footer id="colophon" class="site-footer" role="contentinfo">
      <div>
  <div class="social-wrapper" style={{display:"inline"}}>
    <ul>
      <li>
        <a href="#" target="_blank">
          <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter Logo" class="twitter-icon"></img></a>
      </li>
      <li>
        <a href="#" target="_blank">
          <img src="https://www.mchenryvillage.com/images/instagram-icon.png" alt="Instagram Logo" class="instagram-icon"></img></a>
      </li>
      {/* <li>
        <a href="#" target="_blank">
          <img src="https://www.columbia.edu/~ml3720/linkedin.jpg" alt="Linkedin Logo" class="linkedin-icon"></img></a>
      </li> */}
      <li>
        <a href="#" target="_blank">
          <img src="http://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico" alt="Facebook Logo" class="facebook-icon"></img></a>
      </li>
      {/* <li>
        <a href="#" target="_blank">
          <img src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Google-plus-icon.png" alt="Googleplus Logo" class="googleplus-icon"></img></a>
      </li> */}
      <li>
        <a href="#" target="_blank">
          <img src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170" alt="Youtube Logo" class="youtube-icon"></img></a>
      </li>
      {/* <li>
        <a href="#" target="_blank">
          <img src="http://www.iconarchive.com/download/i94258/designbolts/vector-foursquare/Foursquare-2.ico" alt="Foursquare Logo" class="foursquare-icon"></img></a>
      </li> */}
    </ul>
  </div>
  <div>
  <nav class="footer-nav" role="navigation">
    <p>Copyright &copy; 2013- All rights reserved.</p>
  </nav>
  </div>
  </div>
</footer></>



  );
}

export default Footer;