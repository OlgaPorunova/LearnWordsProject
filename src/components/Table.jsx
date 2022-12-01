import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import multirouter from '../routes/multrouter';

export default function Table({ user }) {
  const [img, setImg] = UseState(null);
  const [avatar, setAvatar] = UseState(null);

  // const sendFile = React.useCallback(async () => {
  //   try {
  //     const data = new FormData();
  //     data.append('avatar', img);

  //     // обращаем к роуту который обрабатывает этот запрос и адресу ручки, data
  //     await axios.post({
  //       headers: multirouter,
  //     })
  //       .then((res) => setAvatar(res.data.path));
  //   } catch (error) { console.log('ищи ошибку ТУТ!!!!!'); }
  // });

  return (
    <div className="App">
      <div className="avatar">
        {
avatar
  ? <img className="logo" src={`${avatar}`} alt="avatar" />
  : <img className="logo" src={`${logo}`} alt="avatar" />
}
      </div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button className="btn" onClick={sendFile}>изменить аватар</button>
    </div>
  );
}
// спросить у Алены
// const [count, setCount] = useState([]);
// useEffect(() => {
//   fetch(`/kab/prog/:${user.id}`)
//     .then((res) => setCount(res));
// }, []);
// return (
//   <div className="container">
//     {/* <table className="score">
//       <thead>
//         <tr>
//           <th scope="col">id</th>
//           <th scope="col">Count</th>
//         </tr>
//       </thead>
//       <th scope="row">{ id }</th>
//       <td>{ id }</td>
//       <td>{ count }</td>
//     </table> */}
//     {
//       count?.map((el) => (
//         <>
//           <div>{el.theme}</div>
//           <div>{el.count}</div>
//         </>
//       ))
//     }
// </div>
// );
// }
