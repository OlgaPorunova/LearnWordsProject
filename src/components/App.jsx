import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './Table';
import Form from './Form';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/myScore" element={<Table />} />
        <Route path="/newForm" element={<Form />} />
      </Routes>
    </div>
  );
}
