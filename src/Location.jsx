import React from 'react'
import { useLocation } from 'react-router-dom';


const Location=()=>{
    const location=useLocation();
    return(
    <>
        <p>the current path of url is {location.pathname}</p>
    </>
    );
}
export default Location;