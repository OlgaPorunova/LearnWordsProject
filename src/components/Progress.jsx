import React, { useState, useEffect } from 'react';
import Table from './Table';

export default function Progress({ card }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    card.themeId = `Прогресс ${count}`;
  }, [count]);
  return (
    card && card.map(((el) => (
      <Table
        id={el.id}
        count={el.count}
      />
    )))
  );
}
