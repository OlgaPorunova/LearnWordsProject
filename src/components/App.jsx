import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Progress from './Progress';
import Cards from './Cards';

export default function App({ cards, score, user }) {
  return (
    <div>
      <Routes>
        <Route path="/cards/:id" element={<Cards cards={cards} />} />
        <Route path="/Progress/:id" element={<Progress score={score} />} />
      </Routes>

    </div>

  );
}
