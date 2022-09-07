import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const NumOrWord = () => {

// PARAMS VARIABLE 
  const { input } = useParams();


// RENDER
  return (
    <div>
      {/* if (isNot a Number) */}
      {
        isNaN( input ) ?
          <h1>The Word is; { input }</h1> :
          <h1>The number is: { input }</h1>
      }
      <Link to={'/'}>Main Page</Link>
    </div>
  )
}

export default NumOrWord