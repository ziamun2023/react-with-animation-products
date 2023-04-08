import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Searchfound = (props) => {
    return (
        <Link to={`/indivi/${props.found.id}`}>
        <div>
        <div  className='shadow-lg cart hover:shadow-4xl hover:-translate-y-2 border border-2 p-4 m-4 relative transition duration-500' key={props.found.id}>
                    <div className='photo relative'><img  src={props.found.thumbnail} alt="" /></div>
                     <p className='text-xl font-medium absolute top-60 text-left m-2 ' key={props.found.id}>{props.found.title}</p>
                 
                   <div className='flex absolute top-72 bg-blue-300 rounded-md mt-4 absolute'>
                    <p className='pr-10 ps-4 '> Price: <b>{props.found.price}$</b>  </p>  <p className='ps-4'> {props.found.rating}
                
</p><StarIcon className="h-6 w-6 text-yellow-500" />
                    </div>
                   
                   
                     <div className=  'bg-black opacity-0  hover:opacity-100 p-6 transition-opacity-300 transition duration-500 bg-opacity-75  absolute text-white font-sans font-medium      inset-0 text-left '>
                     <p>
                          Item:  {props.found.title}
                           
                        </p>
                        <br />
                        <br />
                        <p >
                           Brand: {props.found.brand}
                            
                        </p>
                        <p>
                         in Stock:   {props.found.stock}
                        </p>
                        <p className='font-normal'>
                            {props.found.description}

                        </p>
                        <br />
                        <p>
                            {props.found.published_in
}
                        </p>

                        </div></div>
          
        </div></Link>
    );
};

export default Searchfound;