import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <h6 className='logo'>hi Navbar</h6>
        <Link to ="/" id="menu">Home</Link>
        <Link to ="/Cart" id="menu">Cart</Link>
        
    </div>
    
  )
}

export default Navbar