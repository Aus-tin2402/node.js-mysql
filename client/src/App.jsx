import React from "react";
import  {Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login.jsx";
import Register from "./component/Register/Register.jsx";
import Detail from "./component/Detail/Detail.jsx";
import Update from './component/Update/Update.jsx'
import Delete from './component/Delete/Delete.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/update" element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </>
  );
};

export default App;
