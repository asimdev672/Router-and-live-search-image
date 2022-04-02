import React from 'react'
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
    <>
        <ul>
        <Link  className='li' to="/">Home</Link>
        <Link className='li' to="/Contact">Contact</Link>
        <Link className='li' to="/About">About</Link>
        <Link className='li' to="/User/">User</Link>
        <Link className='li' to="/Location">Location</Link>
        <Link className='li' to="/Search">Search</Link>
            {/* <li> <a href='Home'>Home</a></li>
            <li> <a href='Contact'>Contact</a></li>
            <li> <a href='About'>About</a></li> */}
        
        </ul>
    </>
    );
}
export default Navbar;