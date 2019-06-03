import React from 'react';
import './ScreenComponent.css'

const ScreenComponent = (props) => {
  return(
    <div className="calculator-screen">
      {props.value}
    </div>
  )
}

export default ScreenComponent;