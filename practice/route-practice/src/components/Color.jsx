import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const Color = () => {
  // PARAMS VARIABLE
  const { word, wordColor, setBackgroundColor } = useParams();
// TEXT COLOR FUNCTION
  const textColor = {
    color: wordColor
  }
// BACKGORUND COLOR  FUNCTION
  const backgroundColors = {
    backgroundColor: setBackgroundColor,
    height: 80,
    width: '100%',
  }
  // RENDER
  return (
    <div style={backgroundColors}>
      <h4 style={textColor}>The Word is: {word}</h4>
      <Link to="/">Main Page</Link>
    </div>
  )
}

export default Color