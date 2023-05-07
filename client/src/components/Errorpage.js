import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
                
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p className='mb-5'>
              The page you are looking have been removed or had its name changed or is temporarily unavailabe  
            </p>
            <NavLink to={"/"}>Back to Home Page</NavLink>
        </div>
      
    </div>
  )
}

export default Errorpage
