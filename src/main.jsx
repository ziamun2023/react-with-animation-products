import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componenet/home/Home'
import About from './componenet/about/About'
import Header from './componenet/header/Header'
import Books from './componenet/books/Books'
import Log from './componenet/login/Log'
import Indivi from './componenet/about/Indivi'
import Company from './componenet/aboutcompany/Company'
import Searchfound from './componenet/searchResult/Searchfound'

const router=createBrowserRouter([
  {path:'/',
 element: <App/>,
children:[
 
  {
    path:'/',
    element:<Home/>
  },
  
  {
    path:'/about',
    element:<About/>,
    loader:()=>fetch('https://dummyjson.com/products')
  },
  {
    path:'/books',
    element:<Books/>,
 
  },
  {
    path:'/header',
    element:<Header/>
  },
  {
    path:'/log',
    element:<Log/>
  },
  {
    path:'indivi/:id',
    element:<Indivi/>,
    loader: ({params})=>fetch(`https://dummyjson.com/products/${params.id}`) 
   
  },
  {
    path:'/aboutcompany',
    element:<Company/>
  },
  {
    path:'*',
    element:<div className='text-center absolute left-72 text-7xl'>error 404</div>
  },
  {
    path: '/search',
    element:<Searchfound/>
  }
  // {
  //   path:"search/:productname",
  //   element:<Searchfound/>,
  //   loader:({params})=>fetch(`https://dummyjson.com/products/search?q=${params.productname}`)
  // }
  


]}



])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
 
)
