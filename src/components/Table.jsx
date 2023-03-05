import React, { useState, useEffect } from 'react';

export default function Table({ currUser }) {
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch(`/lk/kab/prog/${currUser.id}`)
      .then((data) => data.json())
      .then((res) => setCount(res));
  }, []);
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <li className="nav-item">
        <a className="nav-link" href="/newForm">Добавление новой карточки</a>
      </li>
      {
      count?.map((el) => (
        <>
          <div>{el.Theme.tittle}</div>
          <div>{el.count}</div>
        </>
      ))
    }
    </div>
  );
}
