import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cards from './Cards';

function App({ cards }) {
  return (
    <Routes>
      <Route path="/cards/:id" element={<Cards cards={cards} />} />

    </Routes>

  );
}

export default App;
