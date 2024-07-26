import React from 'react'
import './Alert.css'
const Alert = ({ children }) => {
  return (
    <div id='containerAlert'>
      <p>{children}</p>
    </div>
  )
}

export default Alert
