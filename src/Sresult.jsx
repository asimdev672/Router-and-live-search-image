import React from 'react'

const Sresult=(props)=>{
    const imgs=`https://picsum.photos/200/300/? ${props.text}`;
    return(
    <>
            <div>
                <img src={imgs} alt="random"  />
            </div>
    </>
    );
}
export default Sresult;