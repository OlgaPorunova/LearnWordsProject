import React, { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Table from './Table';
import Form from './Form';

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
  const [currUser, setcurrUser] = useState(user || {});
  useEffect(() => {
    fetch('/lk/user')
      .then((data) => data.json())
      .then((res) => setcurrUser(res));
  }, []);
  return (
    <div style={{ marginLeft: '150px', marginRight: '150px' }}>
      <Navbar name={name} />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/reg" element={<Registration user={user} />} />
        <Route path="/avt" element={<Authorization />} />
        <Route path="/cards/:id" element={<Cards cards={cards} />} />
        <Route path="/Progress/:id" element={<Progress score={score} />} />
        <Route path="/thems" element={<Thems dataFromDataBase={initState} />} />
        <Route path="/myScore" element={<Table currUser={currUser} />} />
        <Route path="/newForm" element={<Form />} />
      </Routes>
    </div>
  );
}
