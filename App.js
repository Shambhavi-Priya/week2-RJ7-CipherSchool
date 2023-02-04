// import React from "react";
// import Test from "./components/Test";
// import Name from "./components/Name";
// import SumNumbers from "./components/SumNumbers";
// import AllUserList from "./components/AllUserList";
// import SignUpform from "./components/SignUpForm";
// const App = () => {
//   return(
//     <div>
//       {/* <Test  key = {1} /> */}
//       {/* <Test key = {2}/>
//       <Test key = {3}/>
//       <Test key = {4}/>
//       <Test key = {5}/>
//       <Test key={6}/> */}
//       {/* <AllUserList/> */}
//       {/* <Name /> */}
//       {/* <SumNumbers /> */}
//       {/* <SignUpform/> */}
//     </div>
//   )
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import SignUpform from "./components/SignUpForm";
import SumNumbers from "./components/SumNumbers";
import Header from "./components/Header";
import TaskScreen from "./TaskScreen";
import Photos from "./components/Photos";
import Highordercomponent from "./components/HOC";

const App=() =>{
  const Testapp =Highordercomponent(()=>{
    return <div>Test App</div>
  });
  return(
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path ={"/"} element = {<h1>this is on home page</h1>}/>
        <Route path ={"/contact"} element = {<h1>this is on Contact Us page</h1>}/>
        <Route path ={"/about"} element = {<h1>this is on About page</h1>}/>
        <Route path = {"/signup"}element={<SignUpform/>}/>
        <Route path = {"/sum"} element ={<SumNumbers />}/>
        <Route path ={"/tasks"} element={<TaskScreen/>} />
        <Route path={"/photo"} element={<Photos />} />
        <Route path={"/test"} element={<Testapp />} />
      
      
      </Routes>
      </BrowserRouter>
    </div>
  )
};
export default App;