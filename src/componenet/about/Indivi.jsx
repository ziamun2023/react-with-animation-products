import React from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom';
import Showimages from './Showimages';
import { StarIcon ,cart } from '@heroicons/react/24/solid'


const Indivi = () => {
  const navigate=useNavigate()

  const goback=()=>{
navigate(-1)
  }

  const fetchedIndiviData=useLoaderData()
    // cosnt {name}=item
    return (
        <div className='lg:grid grid-cols-2  mx-16 border-2 mt-12 rounded-lg '>
          <button onClick={goback} className='fixed bg-yellow-200 text-2xl p-2 m-2 rounded-md'>back</button>

            {/* left part */}
       <div className='border-2 m-12 rounded-lg shadow-lg '> 
      
       <p>images: <Showimages items={fetchedIndiviData.images }></Showimages>  </p>

       </div>
              {/* right part */}
              <div className='m-16 text-left'>
              <p className='text-2xl font-semibold '> {fetchedIndiviData.description} </p>

<p>Brand Name: {fetchedIndiviData.brand} </p>
<p>category: {fetchedIndiviData.category} </p>
<p>discountPercentage: {fetchedIndiviData.discountPercentage} </p>

<div className='flex  p-4 bg-blue-200 text-xl rounded-md mt-4 '>
                    <p className='pr-10  '> Price: <b>{fetchedIndiviData.price}$</b>  </p>  <p className='ps-12'> {fetchedIndiviData.rating}
                
</p><StarIcon className="h-6 w-6 text-yellow-500" />
                    </div>
                   <div className='flex gap-6'>
                   <button className='mt-8 bg-rose-400 p-2 rounded-md hover:bg-rose-500 hover:-translate-y-2 duration-300'>
                      Buy now
                    </button>
                    <button className='mt-8 bg-blue-400 p-2  hover:bg-blue-500 rounded-md hover hover:-translate-y-2 duration-300'>
                      Add to cart
                    </button>

                   </div>


</div>
        </div>
    );
};

export default Indivi;