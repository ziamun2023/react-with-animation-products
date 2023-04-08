import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animation.json";
import  '../../App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const phoneNumber = '1234567890';
    
    return (
       <>
         <div className=' grid lg:grid-cols-2 mx-16 relative '>

        <div  className='mt-20'>
     <p className='text-8xl text-left '>Shop your <span className='text-blue-400'>needs</span></p>
     <p className='text-left pt-7'>If certainty is a core need for you, then Shopsense can meet that need perfectly Shopping is always there – there are always Shopsense to be shopped at. There’s never any concern that the shops won’t be there, or won’t be open, or won’t want to take your trade.</p>
   <Link to='/log'>
   <p className='text-start'> <button className='bg-blue-400    hover:bg-blue-500 px-8 py-2 mt-8 font text-lg text-white '>Log In</button></p> </Link>
        </div>
         <div  >
         <Lottie className='animation' animationData={groovyWalkAnimation} loop={true} />;
        
        </div>
        
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
<button><img className='w-16 absolute bottom-2  left-0' src="../../../src/assets/icons8-whatsapp (2).gif" alt="whatsapp contact" /></button>
</a>
     
        </div>
   
        <div className='bg-black w-full  h-48 text-white relative  '> <p className='text'>&copy; all rights reserved   SHopsense </p> <p className='p-4'>Contact: +9908665234 <br /> address: 11th street , roadcity , xyCountry <br /> email: shopsense334@gmai.com </p>  </div>
       </>
       
        
    );
};

export default Home;
