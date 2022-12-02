import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Authorization from './registration/Authorization';
import Registration from './registration/Registration';

export default function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/reg" element={<Registration />} />
        <Route path="/avt" element={<Authorization />} />

      </Routes>
    </div>
  );
}
