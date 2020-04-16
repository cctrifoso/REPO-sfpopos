// src/Title.js

import './Title.css';
import { NavLink } from 'react-router-dom'

import React from 'react'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>
        <NavLink
        className="nav-link" 
        activeClassName="nav-link-active"
        to="/about">About</NavLink>
        <div>
        <NavLink to="/">List</NavLink>
        <NavLink to="/about">About</NavLink>



      </header>
    </div>
  )
}

export default Title
