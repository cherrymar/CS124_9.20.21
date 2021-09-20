import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const data = {
//   name: "Neil Rhodes,
//   email: "rhodes@hmc.edu,
//   phone: "(909) 555-1212"
// };

const data = [
  {
    id: 512,
    name: "Neil Rhodes",
    email: "rhodes@hmc.edu",
    phone: "(909) 555-1212"
   },
  {
    id: 787,
    name: "Barack Obama",
    email: "ex-prez@whitehouse.gov",
    phone: "(312) 555-1212"
   }
];

// const items = data.map(e => <li id={e.id}>{e.name}&emsp;{e.email}&emsp;{e.phone}</li>)
const items = data.map(e => 
  <div className="container" key={e.id}>
    <div className="name">{e.name}</div>
    <div className="email">{e.email}</div>
    <div className="phone">{e.phone}</div>
  </div>)


ReactDOM.render(
  <>
  <h1>People</h1>
  
  {items}
  
  {/* <div className="container"> */}
    {/* <div className="name">{data.name}</div>
    <div className="email">{data.email}</div>
    <div className="phone">{data.phone}</div> */}
  {/* </div> */}
  
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
