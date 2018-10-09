import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import routes from './routes';


export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <NavLink className="links" to="/">Home</NavLink>
              <NavLink className="links" to="/about">About</NavLink>
          </div>
        </nav>

        {routes}
      </div>
    )
  }
}