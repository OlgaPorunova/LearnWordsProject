import React, { useState, useEffect } from 'react';

export default function Table({ user }) {
  // спросить у Алены
  const [count, setCount] = useState([]);
  useEffect(() => {
    fetch(`/kab/prog/:${user.id}`)
      .then((res) => setCount(res));
  }, []);
  return (
    <div className="container">
      {/* <table className="score">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <th scope="row">{ id }</th>
        <td>{ id }</td>
        <td>{ count }</td>
      </table> */}
      {
        count?.map((el) => (
          <>
            <div>{el.theme}</div>
            <div>{el.count}</div>
          </>
        ))
      }
    </div>
  );
}
