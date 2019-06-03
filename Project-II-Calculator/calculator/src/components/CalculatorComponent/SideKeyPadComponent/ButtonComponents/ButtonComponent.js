import React from 'react';

const ButtonComponent = (props) => {
  return(
    <div className="side-button" onClick={() => {
      props.handleMath(props.value);
    }}> {props.value} </div>
  )
}

export default ButtonComponent;