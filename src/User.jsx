import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const User=()=>{
    const {fname}=useParams();
    const location=useLocation();
    return(
    <>
         <h1>this is a {fname} page</h1>
         <p>the current path is    {location.pathname}</p>
    </>
    );
}
export default User;