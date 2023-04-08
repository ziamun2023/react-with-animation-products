import React from 'react';
import { LineChart,Bar , Line, CartesianGrid, XAxis, YAxis,Area , Tooltip,ComposedChart,Legend  } from 'recharts';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/90690-shopping.json";
import animii from "../../assets/127429-customer-care.json";
import animi2i from "../../../95664-productivity.json";
import anim from "../../assets/75777-isometric-production-chain-industry.json";


const Company = () => {
    const data = [{name: '2017', uv: 14, pv: 2400, amt: 2400},{name: '2018', uv: 20, pv: 1000, amt: 240},{name: '2019', uv: 29, pv: 1000, amt: 240},{name: '2020', uv: 40, pv: 1000, amt: 240},{name: '2021', uv: 33, pv: 1000, amt: 240},{name: '2022', uv: 60, pv: 1000, amt: 240},{name: '2023', uv: 100, pv: 1000, amt: 240}];

    const data2 = [
        {
          "name": "2017",
          "uv": 20,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "2018",
          "uv": 30,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "2019",
          "uv": 50,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "2020",
          "uv": 50,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "2021",
          "uv": 65,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "2022",
          "uv": 75,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "2023",
          "uv": 90,
          "pv": 4300,
          "amt": 2100
        }
      ]
      
               
    return (
       <div className=''>
        <div className='grid lg:grid-cols-2 md:mx-16 '>
          
          <div className=''>  <LineChart className='mt-4' width={500}  height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  <p className='text-4xl font-semibold'>Sales Growth</p> 
  <p className='text-left m-4' ><span className='text-blue-400'>Shopsense</span>, is experiencing the fastest growth of sales in the world.This is a remarkable achievement and a testament to our team's hard work and dedication. Our innovative products, exceptional customer service, and effective marketing strategies have clearly resonated with consumers around the globe. Our commitment to providing high-quality products at affordable prices has earned us a loyal following and helped drive unprecedented growth for our business. With this kind of momentum, the sky's the limit for Shopsense, and we are well on our way to becoming a dominant force in our industry. </p></div>
  <div>
  <Lottie className='animation' animationData={groovyWalkAnimation} loop={true} />;
  </div>
        </div>
        <div className='grid lg:grid-cols-2 mt-16'>
       
<div><Lottie className='animation' animationData={anim} loop={true} />;</div>

<div>  <ComposedChart width={730} height={250} data={data2}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
</ComposedChart>

<p className='text-4xl font-semibold mt-16'>Increase of man power in logistics</p> 
<p className='text-left m-4'>
<span className='text-blue-400'>Shopsense</span>, has the best logistics in the world. Our exceptional supply chain management, streamlined distribution channels, and state-of-the-art inventory control have set a new standard for the industry. Our customers can count on fast, reliable delivery, and our suppliers can rely on timely and efficient product sourcing. With our unparalleled logistics infrastructure, we are able to maintain an optimal level of inventory, minimize waste, and maximize profitability. This is a remarkable achievement and a testament to our team's dedication to excellence.</p></div>

      </div>
      <div className='grid lg:grid-cols-2 md:mx-16 '>
          
          <div className=''>  <LineChart className='mt-4' width={500}  height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
  <p className='text-4xl font-semibold'>Sales Growth</p> 
  <p className='text-left m-4' ><span className='text-blue-400'>Shopsense</span>, Shopsense, has the best customer care service in the world. With round-the-clock availability, our team of knowledgeable and friendly customer service representatives are always ready to assist and ensure customer satisfaction. Our commitment to providing exceptional customer care has earned us a loyal customer base and set us apart from us competitors.</p></div>
  <div>
  <Lottie className='animation' animationData={animii} loop={true} />;
  </div>
        </div>
        <div className='grid lg:grid-cols-2 mt-16'>
       
       <div><Lottie className='animation' animationData={animi2i} loop={true} />;</div>
       
       <div> 
       
       <p className='text-4xl font-semibold mt-16'>Job opportunity and Affiliate marketing </p> 
       <p className='text-left m-4'>
       <span className='text-blue-400'>Shopsense</span>,  offers the best job opportunities and affiliate marketing in the world. Our dynamic work culture, competitive compensation, and comprehensive benefits package attract top talent from around the globe. Our affiliate marketing program provides a lucrative income stream for our partners and has established you as a leader in the industry. With these key advantages, we are well-positioned for continued success and growth.</p></div>
       
             </div>
        
       </div>
    );
};

export default Company;