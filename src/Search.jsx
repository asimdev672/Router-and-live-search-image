import React, { useState } from 'react'
import Sresult from './Sresult';
const Search=()=>{

    const[img,setImg]=useState('');
    const inputFeild=(event)=>{
        setImg(event.target.value)
          console.log(event.target.value)
    }
    return(
    <>
        <input type="text" placeholder='Search Here' value={img} onChange={inputFeild} className='input-feild' />
       {img==='' ? null : <Sresult text={img}/> } 
    </>
    );
}
export default Search;