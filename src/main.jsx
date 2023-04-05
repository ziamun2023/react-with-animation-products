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
    element:<About/>
  },
  {
    path:'/books',
    element:<Books/>
  },
  {
    path:'/header',
    element:<Header/>
  },
  {
    path:'/log',
    element:<Log/>
  }



]}



])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
 
)
