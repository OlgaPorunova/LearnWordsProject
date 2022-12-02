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
      <div className="d-grid gap-2">
        {themes.map((el) => (
          <a href={`/thems/${el.id}`}>
            <button className="btn btn-primary test" type="button">{`${el.tittle}`}</button>
          </a>
        ))}
      </div>
    </div>
  );
}
