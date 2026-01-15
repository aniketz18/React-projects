import React from 'react'
import Left from './Left'
import Right from './Right'
import '/public/styles/frame.css'

function Frame() {
  return (
    <div className='frame'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Frame
