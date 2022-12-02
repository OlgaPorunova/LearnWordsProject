import React from 'react';

export default function Registration() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/user/reg', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = '/thems';
    } else {
      window.location = '/avt';
    }
  };
  return (
    <div className="d-flex justify-content-center flex-wrap">

      <form className="cont" onSubmit={submitHandler}>
        <h2 className="title">Регистрация 👋
</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name:
            <input name="name" type="text" className="form-control" id="exampleInputEmail1" placeholder="Введите имя" aria-describedby="emailHelp" />
          </label>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email:
            <input name="email" type="text" className="form-control" id="exampleInputEmail1" placeholder="Введите  Email" aria-describedby="emailHelp" />
          </label>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password:
            <input name="pass" type="password" className="form-control" placeholder="Введите пароль" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-secondary">Зарегистрироваться</button>

      </form>
    </div>
  );
}
