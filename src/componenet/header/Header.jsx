import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';


import { BoltIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'  
const Header = () => {
    const [IsMenuOpen,setIsMenuOpen]=useState(false)
    return (
     <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'  >
           <div className='relative flex space-x-6 m-4 pr-8 justify-between '>
        
        <Link to ='/' className='flex'>
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span> Shopsense</span>
            
            </Link> 
  

         <ul className='item-center hidden space-x-8 lg:flex text-lg font-medium '>
                <li className='hover:text-xl hover:bg-white rounded-md p-3 duration-200'>
                    <NavLink to='/' className={({isActive})=> isActive? 'text-blue-600': 'default' }> home</NavLink>
                </li>
                <li className='hover:text-xl hover:bg-white rounded-md p-3 duration-200'>
                    <NavLink to='/about' className={({isActive})=> isActive? 'text-blue-600': 'default' }> All products </NavLink>
                </li>
                <li className='hover:text-xl hover:bg-white rounded-md p-3 duration-200'>
                    <NavLink to='/books' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Customer care</NavLink>
                </li>
                <li className='hover:text-xl hover:bg-white rounded-md p-3 duration-200'>
                    <NavLink to='/log' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Log in</NavLink>
                </li>
                </ul>
                <div className='lg:hidden'>
                    <button onClick={()=> setIsMenuOpen(true)}>
                    <Bars3Icon className='w-5 text-gray-600' />


                    </button>
                    {IsMenuOpen && 
                    <div className='absolute top-0 left-0 w-full z-10 '>
                        <div className='p-5 bg-white border rounded shadow-sm '>
                            <div className='flex items-center justify-between mb-4'>
                            <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                            </div>
                            <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                       Customer Care
                      </Link>
                      <li>
                    <NavLink to='/log' className={({isActive})=> isActive? 'text-blue-600': 'default' }> Log in</NavLink>
                </li>
                    </li>
                  </ul>
                </nav>
                        </div>
                        
                    </div>}
                    
                    </div> </div>
     </div>
       
    );
};

export default Header;