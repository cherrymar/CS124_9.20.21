import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// const Component = () => {

//   // const data = {
// //   name: "Neil Rhodes,
// //   email: "rhodes@hmc.edu,
// //   phone: "(909) 555-1212"
// // };
// const [arr, setArr] = useState([
//   {
//     id: 512,
//     name: "Neil Rhodes",
//     email: "rhodes@hmc.edu",
//     phone: "(909) 555-1212"
//    },
//   {
//     id: 787,
//     name: "Barack Obama",
//     email: "ex-prez@whitehouse.gov",
//     phone: "(312) 555-1212"
//    },
//    {
//     id: 788,
//     name: "Cher Maa",
//     email: "cma@g.hmc.edu",
//     phone: "(626) 898-2115"
//    }
// ]);

// // function myTimer() {
// //   data.splice(0, 1);
// //   console.log("hello world")
// // }

// // const items = data.map(e => <li id={e.id}>{e.name}&emsp;{e.email}&emsp;{e.phone}</li>)
// // const items = 


//   // const [arr, setArr] = useState(['one', 'two', 'three', 'four']);

//   React.useEffect(() => {
//     console.log("render");
//     const timer = setTimeout(deleteElementFromArr, 2000);
//     return () => clearTimeout(timer);
// });

//   // const addNewElementToArr = () => {
//   //     let temp = arr.slice();
//   //     temp.push('newElement');
//   //     setArr(temp);
//   // };

//   const deleteElementFromArr = () => {
//       if (arr.length > 0) {
//           console.log(arr);
//           let temp = arr.slice();
//           temp.splice(0, 1);
//           setArr(temp)

//       }
//   };

//   return (
//   <>
//     {
//     data.map(e => 
//     <div className="container" key={e.id}>
//       <div className="name">{e.name}</div>
//       <div className="email">{e.email}</div>
//       <div className="phone">{e.phone}</div>
//     </div>)
//     }
//   </>
//     )
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
   },
   {
    id: 788,
    name: "Cher Ma",
    email: "cma@g.hmc.edu",
    phone: "(626) 898-2115"
   }
]



ReactDOM.render(
  <>
  <h1>People</h1>
  
  {
    data.map(e => 
    <div className="container" key={e.id}>
      <div className="name">{e.name}</div>
      <div className="email">{e.email}</div>
      <div className="phone">{e.phone}</div>
    </div>)
  }
  {/* {items} */}
  
  {/* <div className="container"> */}
    {/* <div className="name">{data.name}</div>
    <div className="email">{data.email}</div>
    <div className="phone">{data.phone}</div> */}
  {/* </div> */}
  

  {/* {setInterval(myTimer, 2000)}  */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

