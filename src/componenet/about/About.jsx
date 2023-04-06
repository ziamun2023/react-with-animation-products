import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {useState} from 'react'

const About = () => {
    const [load,setLoad]=useState(6)
    const alldata=useLoaderData()
    const handleclick=()=>{
        setLoad(0)
    }
    console.log(alldata.data.tools.slice(6))
   
    return (
        <div>
        <div className="grid gap-4 mb-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {
                alldata.data.tools.slice(load).map((item)=>
                   <div className='shadow-lg hover:shadow-4xl hover:-translate-y-2 border border-2 p-4 m-4 relative transition duration-500' key={item.id}>
                    <img className='object-cover' src={item.image} alt="" />
                     <p  key={item.id}>{item.name}</p>
                     <div className=  'bg-black opacity-0  hover:opacity-100 p-6 transition-opacity-300 transition duration-500 bg-opacity-75  absolute text-white font-sans font-medium      inset-0 text-left '>
                     <p>
                            {item.name}
                        </p>
                        <p>
                            {item.description}

                        </p>
                        <p>
                            {item.published_in
}
                        </p>

                        </div></div>
                )
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