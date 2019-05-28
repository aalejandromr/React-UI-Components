import React from 'react';
import ButtonComponent from './ButtonComponents/ButtonComponent'
import './SideKeyPadComponent.css'

const SideKeyPadComponent = () => {
  return(
    <div className="side-keypad">
      <div className="side">
        <ButtonComponent value="%" />
        <ButtonComponent value="x" />
        <ButtonComponent value="-" />
        <ButtonComponent value="+" />
        <ButtonComponent value="=" />
      </div>

    </div>
  );
}

export default SideKeyPadComponent;