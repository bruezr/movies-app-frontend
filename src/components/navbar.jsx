import React from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from '../routers';

function Navbar(props) {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <A className="nav-link" href="/">
                Movies <span className="sr-only">(current)</span>
              </A>
            </li>
            <li className="nav-item">
              <A className="nav-link" href="/addmovie">
                Add Movies
              </A>
            </li>
          </ul>
        </div>
      </nav>
      {routeResult}
    </div>
  );
}

export default Navbar;
