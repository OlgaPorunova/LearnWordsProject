import React, { useEffect, useState } from 'react';

export default function Thems() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    fetch('/thems/all')
      .then((data) => data.json())
      .then((data) => setThemes(data));
  }, []);

  return (
    <div>
      <div style={{ marginTop: '150px', marginBottom: '30px' }} className="d-grid gap-2">
        {themes.map((el) => (
          <a href={`/cards/${el.id}`}>
            <button style={{ marginBottom: '30px' }} className="btn btn-primary test" type="button">{`${el.tittle}`}</button>
          </a>
        ))}
      </div>
    </div>
  );
}
