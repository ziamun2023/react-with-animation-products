import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animation.json";
import  '../../App.css'
import { Link } from 'react-router-dom';
const Home = () => {
    
    return (
        <div className='flex'>
        <div  className='mt-20'>
     <p className='text-8xl text-left '>Shop your <span className='text-blue-400'>needs</span></p>
     <p className='text-left pt-7'>If certainty is a core need for you, then Shopsense can meet that need perfectly Shopping is always there – there are always Shopsense to be shopped at. There’s never any concern that the shops won’t be there, or won’t be open, or won’t want to take your trade.</p>
   <Link to='/log'>
   <p className='text-start'> <button className='bg-blue-400 px-8 py-2 mt-8 font text-lg text-white '> Log In</button></p> </Link>
        </div>
         <div >
         <Lottie className='animation' animationData={groovyWalkAnimation} loop={true} />;
        
        </div>
     
        </div>
    );
};

export default Home;