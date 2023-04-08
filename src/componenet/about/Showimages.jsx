import React, { useState } from 'react';
import { ArrowLongRightIcon ,ArrowLongLeftIcon} from '@heroicons/react/24/solid'  

const Showimages = (props) => {
    let number= props.items.length
    console.log(number)

    const [count,setCount]=useState(0)
    const handleclicknext=()=>{
       
         const nextImage=count+1 
        setCount(nextImage)
        
    
      
      
     }
    
      if(count===number){
        setCount(0)
     }

    
     
    
     const handleclickprevious=()=>{
       
        const nextImage=count-1 
        setCount(nextImage)
     
     
    }

   

    return (
        <div className='relative flex imagegallery   mx-16'>
           {/* <div className=' absolute top-48 right-full'>
            <button  onClick={handleclickprevious} className='bg-blue-200  rounded-s-lg' > <ArrowLongLeftIcon className="h-10 w-10 to-black" /></button>
            </div> */}
           <div >
           <img className='photocrop' src={props.items[count]} alt="" /> 
           </div>

            <div className='flex absolute pb-1 rounded-lg text-3xl top-48 left-full'> <button onClick={handleclicknext}   className='bg-blue-200  rounded-e-lg'> <ArrowLongRightIcon className="h-10 w-10 to-black" />  </button>  </div>
             
        
         
       
           </div>
            
         
     
    );
};

export default Showimages;