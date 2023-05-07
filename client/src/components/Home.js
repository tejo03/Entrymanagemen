import React from 'react'
import {Link} from "react-router-dom";
import Header from './Header';
import Medium from './medium';
import Example from './slider'
import Footer from './Footer';
import 'react-slideshow-image/dist/styles.css'
const Home=() =>{
    return (
        <div>
            <Header/>
            <div >
            <Example/>
            </div>
            <Footer/>
        </div>
            
        
        

        
    );
}
export default Home;