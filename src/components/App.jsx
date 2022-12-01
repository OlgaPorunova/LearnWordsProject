import React from 'react';
import Progress from './Progress';

export default function App({ score, user }) {
  return (
    <div>
      <Progress score={score} />
    </div>
  );
}
