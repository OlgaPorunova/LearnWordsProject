import React from 'react';

// import { Route, Routes } from 'react-router-dom';
// // import AuthReg from './AuthReg';
// import Mainpage from './Mainpage';
// import Navbar from './Navbar';
// // import Login from './Login';
// import Thems from './Thems';

// export default function App({ initState }) {
//   return (
//     <div className="container">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Mainpage />} />
//         {/* <Route path="/auth/reg" element={<AuthReg />} /> */}
//         {/* <Route path="/in" element={<Login />} /> */}
//         <Route path="/thems" element={<Thems dataFromDataBase={initState} />} />
//       </Routes>
//     </div>

import { Routes, Route } from 'react-router-dom';
import Progress from './Progress';
import Cards from './Cards';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import Thems from './Thems';

import Authorization from './registration/Authorization';
import Registration from './registration/Registration';

export default function App({
  cards, score, user, initState, name,
}) {
  return (
    <div className="container">
      <Navbar name={name} />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/reg" element={<Registration user={user} />} />
        <Route path="/avt" element={<Authorization />} />
        <Route path="/cards/:id" element={<Cards cards={cards} />} />
        <Route path="/Progress/:id" element={<Progress score={score} />} />
        <Route path="/thems" element={<Thems dataFromDataBase={initState} />} />
      </Routes>

    </div>

  );
}
