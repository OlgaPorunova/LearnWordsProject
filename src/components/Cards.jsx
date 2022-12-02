import React, { useState } from 'react';

export default function Cards({ cards }) {
  const [cardsArr, setCardsArr] = useState(cards);

  const [card, setCart] = useState(cardsArr[0]);
  const [show, setShow] = useState(false);

  // fetch  запрос - при нажатии на кнопку отправить card.id
  console.log({ show });
  const randCard = (arr, id) => {
    console.log('click');
    const array = arr.filter((el) => el !== card);
    if (array.length) {
      fetch(`/cards/lk/kab/${id}`);
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
      {/* <div className="wrap"> */}
      <div className="cards" onClick={() => setShow((prev) => !prev)}>

        {/* <div className="front"><span>Front</span></div> */}
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

      {/* </div> */}
    </div>

  );
}

// return (
//     <div className="container">
//       {/* </>style={{ width:"200px"; height:"150px"; }} */}
//       <h1>Let`s start learning words</h1>
//       <div>

//         <img className="card" src={card.link} alt="Snow" style={{ width: '100%', opacity: '0.6' }} />

//       </div>
//       <div className="word">
//         <h1>{card.ruName}</h1>
//       </div>

//       <button
//         className="bottom"
//         type="button"
//         style={{ width: '200px', height: '50px' }}
//         onClick={() => {
//           randCard(cardsArr);
//         }}
//       >
//         Изучено

//       </button>

//     </div>
//   );
// }
