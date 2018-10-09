import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <button className='btn'><NavLink to="/classlist/MATH1010">Math 1010</NavLink></button>
        <button className='btn'><NavLink to="/classlist/ENG2010">English 2010</NavLink></button>
        <button className='btn'><NavLink to="/classlist/BIO2020">Biology 2020</NavLink></button>
      </div>
    );
  }
}
