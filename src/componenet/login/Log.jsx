import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/68312-login.json";

const Log = () => {
    return (
        <div className='flex'>
        <div  className='mt-20'>
     <p className='text-8xl text-left '>Shop your <span className='text-blue-400'>needs</span></p>
     <p className='text-left pt-7'>If certainty is a core need for you, then Shopsense can meet that need perfectly Shopping is always there – there are always Shopsense to be shopped at. There’s never any concern that the shops won’t be there, or won’t be open, or won’t want to take your trade.</p>
  
        </div>
        <div className='animate3'>
        <div className='animate4' >
         <Lottie className='animation' animationData={groovyWalkAnimation} loop={true} />;
        
        </div>
        </div>
     
        </div>
    );
};

export default Log;