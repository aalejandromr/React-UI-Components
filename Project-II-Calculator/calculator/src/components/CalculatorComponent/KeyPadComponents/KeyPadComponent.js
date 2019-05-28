import React from 'react';
import ButtonComponent from './ButtonComponents/ButtonComponent'
import './KeyPadComponent.css';

const KeyPadComponent = (props) => {
  return(
    <div className="keypad">
      <div className="clear">
        <ButtonComponent value="Clear" handleUpdate={props.handleClear}/>
      </div>
      <div className="top">
        <ButtonComponent value={7} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={8} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={9} handleUpdate={props.handleUpdate}/>
      </div>

      <div className="middle">
        <ButtonComponent value={4} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={5} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={6} handleUpdate={props.handleUpdate}/>
      </div>

      <div className="bottom">
        <ButtonComponent value={1} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={2} handleUpdate={props.handleUpdate}/>
        <ButtonComponent value={3} handleUpdate={props.handleUpdate}/>
      </div>

      <div className="bottom-0">
        <ButtonComponent value={0} handleUpdate={props.handleUpdate}/>
      </div>

    </div>
  )
}

export default KeyPadComponent;