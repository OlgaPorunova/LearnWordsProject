import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Progress from './Progress';
import Cards from './Cards';

import Authorization from './registration/Authorization';
import Registration from './registration/Registration';

export default function App({ cards, score, user }) {
  return (
    <div className="container">
      <Routes>
        <Route path="/reg" element={<Registration user={user} />} />
        <Route path="/avt" element={<Authorization />} />
        <Route path="/cards/:id" element={<Cards cards={cards} />} />
        <Route path="/Progress/:id" element={<Progress score={score} />} />
      </Routes>

    </div>

  );
}
