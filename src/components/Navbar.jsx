import React from 'react';

export default function Navbar({ name }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      Hello!
      {name}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">learnwords</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          {name ? (

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/logout">Logout</a>
              </li>
            </ul>

          )
            : (

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/reg">Registration</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/avt">Autorization</a>
                </li>
              </ul>

            )}

        </div>
      </div>
    </nav>
  );
}
