import React from 'react';
import ButtonComponent from './ButtonComponents/ButtonComponent'
import './SideKeyPadComponent.css'

const SideKeyPadComponent = (props) => {
  return(
    <div className="side-keypad">
      <div className="side">
        <ButtonComponent value="%" handleMath={props.handleMathSign} />
        <ButtonComponent value="x" handleMath={props.handleMathSign}/>
        <ButtonComponent value="-" handleMath={props.handleMathSign}/>
        <ButtonComponent value="+" handleMath={props.handleMathSign}/>
        <ButtonComponent value="=" handleMath={props.handleMath}/>
      </div>

    </div>
  );
}

export default SideKeyPadComponent;