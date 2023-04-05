import React from 'react';
import Header from './componenet/header/Header';
import { Outlet } from 'react-router-dom';




const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>


      
  
    </div>
  );
};

export default App;