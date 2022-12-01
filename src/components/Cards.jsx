import React, { useState } from 'react';

export default function Cards({ cards }) {
  const [cardsArr, setCardsArr] = useState(cards);
  const [card, setCart] = useState(cardsArr[0]);

  // fetch  запрос - при нажатии на кнопку начинается счетчик

  const randCard = (arr) => {
    const array = arr.filter((el) => el !== card);
    if (array.length) {
      setCardsArr(array);
      setCart(array[Math.floor(Math.random() * array.length)]);
    } else {
      window.location = '/';
    }
  };
  //   if (array.length === 0) {
  //     window.location = '/';
  //   }

  return (
    <div className="container">
      {/* </>style={{ width:"200px"; height:"150px"; }} */}
      <h1>Let`s start learning words</h1>
      <div>

        <img className="card" src={card.link} alt="Snow" style={{ width: '100%', opacity: '0.6' }} />

      </div>
      <div className="word">
        <h1>{card.ruName}</h1>
      </div>

      <button
        className="bottom"
        type="button"
        style={{ width: '200px', height: '50px' }}
        onClick={() => {
          randCard(cardsArr);
        }}
      >
        Изучено

      </button>

    </div>
  );
}
