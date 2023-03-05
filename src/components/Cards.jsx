import React, { useState } from 'react';

export default function Cards({ cards }) {
  const [cardsArr, setCardsArr] = useState(cards);

  const [card, setCart] = useState(cardsArr[0]);
  const [show, setShow] = useState(false);

  console.log({ show });
  const randCard = async (arr, id) => {
    console.log('click');
    await fetch(`/lk/kab/${id}`);
    const array = arr.filter((el) => el !== card);
    if (array.length) {
      console.log('------', cardsArr);
      setCardsArr(array);

      setCart(array[Math.floor(Math.random() * array.length)]);
    } else {
      window.location = '/';
    }
  };

  return (
    <>
      {cardsArr.length && (
      <div className="container">
        <h1>Let`s start learning words</h1>
        <div className="cards" onClick={() => setShow((prev) => !prev)}>
          <div className="front" style={show ? { transform: 'rotateY(180deg)' } : null}>
            <img src={card.link} style={{ width: '650px', height: '400px' }} alt="Snow" />
            <h1 className="word">{card.enName}</h1>
          </div>

          <div className="back" style={show ? { transform: 'rotateY(360deg)' } : null}>
            <img src={card.link} style={{ width: '650px', height: '400px' }} alt="Snow" />
            <h1 className="word">{card.ruName}</h1>
            <button
              className="bottom"
              type="button"
              style={{ width: '150px', height: '50px' }}
              onClick={() => {
                randCard(cardsArr, card.id);
              }}
            >
              Изучено
            </button>
          </div>
          <div />
        </div>
      </div>
      )}
    </>
  );
}
