import React from 'react';

export default function Authorization() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/user/avt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/thems';
    }
  };
  return (
    <div className="container-aut">
      <form
        style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '70px',
        }}
        onSubmit={submitHandler}
      >
        <h2 className="title">Авторизация 🙌</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email:
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Введите  Email" aria-describedby="emailHelp" />
          </label>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password:
            <input name="password" type="password" className="form-control" placeholder="Введите пароль" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">Авторизация</button>

      </form>
    </div>
  );
}
