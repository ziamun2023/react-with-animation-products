import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animate/95978-customer-care.json";


const Books = () => {

   
    return (
        <div className='grid lg:grid-cols-2  mx-16'>
        <div  className='mt-20'>
     <p className='text-left pt-7 text-4xl  '>Welcome to <span className='text-blue-400'>Shopsense</span> Online Customer Service. <br /> <br /> You can live chat with us or send an email or post your queries on our facebook page </p>
     <p className='text-left pt-7'>.</p>
 
        </div>
         <div >
         <Lottie className='animation2' animationData={groovyWalkAnimation} loop={true} />;
        
        </div>
     
        </div>
    );
};

export default Books;