import React from 'react';
import { Link } from 'react-router-dom';


const Main = () => {
  return (
    <div>
      <h1>hello</h1>
      <Link to={"/home"}><h5>Home</h5></Link>
    </div>
  )
}

export default Main