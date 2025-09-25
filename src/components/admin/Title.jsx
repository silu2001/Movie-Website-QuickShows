import React from 'react'

const Title = ({text1,text2}) => {
  return (
  <h2 className="titleText">
    {text1} <span className='titleTextHighlight'>{text2}</span>
  </h2>
  )
}

export default Title
