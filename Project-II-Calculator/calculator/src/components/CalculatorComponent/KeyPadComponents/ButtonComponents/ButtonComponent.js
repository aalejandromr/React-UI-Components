import React from 'react';

const ButtonComponent = (props) => {
  return (
    <div className="button" onClick={() => {
      props.handleUpdate(props.value)
    }}> {props.value} </div>
  )
}

export default ButtonComponent;