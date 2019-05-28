import React from 'react';
import ButtonComponent from './ButtonComponents/ButtonComponent'
import './KeyPadComponent.css';

const KeyPadComponent = () => {
  return(
    <div className="keypad">
      <div className="clear">
        <ButtonComponent value="Clear" />
      </div>
      <div className="top">
        <ButtonComponent value={7} />
        <ButtonComponent value={8} />
        <ButtonComponent value={9} />
      </div>

      <div className="middle">
        <ButtonComponent value={4} />
        <ButtonComponent value={5} />
        <ButtonComponent value={6} />
      </div>

      <div className="bottom">
        <ButtonComponent value={1} />
        <ButtonComponent value={2} />
        <ButtonComponent value={3} />
      </div>

      <div className="bottom-0">
        <ButtonComponent value={0} />
      </div>

    </div>
  )
}

export default KeyPadComponent;