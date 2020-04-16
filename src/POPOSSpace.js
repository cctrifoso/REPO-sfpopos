// src/Project.js

import React from 'react'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address } = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
    <Link to={`/details/${id}`}>
    <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
    </Link>
    <h1>
    <Link to={`/details/${id}`}>
    {name}
    </Link>
    </h1>
  )
}

export default POPOSSpace
