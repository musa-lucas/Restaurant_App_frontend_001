import React from 'react'
import { Link } from 'react-router-dom'
import './NonAuthNavbar.css'
 function NonAuthNavbar() {
  return (
    <nav>
     <div className="logo-nav-container">
<h2>foody fingers</h2>
     </div> 
     <div className="main-nav-container">
<ul>
   <li>
    <Link to={'/menu'}>Menu</Link>
   </li> 
   <li>
      <Link to={'/login'}>login</Link>
   </li>
   <li>
     <Link to={'/Signup'}>Signup</Link>
   </li>
</ul>
     </div>  
    </nav>
  )
}

export default NonAuthNavbar
