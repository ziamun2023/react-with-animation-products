import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import Allcart from './Allcart';

const About = () => {
  
    const [load,setLoad]=useState(6)
    const alldata=useLoaderData()
    console.log(alldata.products)
    const handleclick=()=>{
        setLoad(0)
    }

   
    return (
        <div>
            
        <div className="grid gap-4 mb-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 mx-16">
         { 
            alldata.products.map(item=><Allcart item={item}></Allcart>)
         } 
        </div>

        <div>
      {load === 6 ? (
       <button  className='bg-blue-400 text-xl   text-white font-semibold hover:text-2xl  duration-300  p-2 hover:bg-blue-700 rounded-lg' onClick={handleclick}> load more</button>
      ) : null}
    </div>
       
         
   
        </div>
    );
};

export default About;