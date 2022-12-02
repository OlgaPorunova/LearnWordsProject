import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AuthReg from './AuthReg';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
// import Login from './Login';
import Thems from './Thems';


export default function App({ initState }) {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        {/* <Route path="/auth/reg" element={<AuthReg />} /> */}
        {/* <Route path="/in" element={<Login />} /> */}
        <Route path="/thems" element={<Thems dataFromDataBase={initState} />} />
      </Routes>
    </div>
  );
}
