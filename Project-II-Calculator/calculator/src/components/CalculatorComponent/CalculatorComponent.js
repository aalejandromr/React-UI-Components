import React from 'react';
import KeyPadComponent from './KeyPadComponents/KeyPadComponent'
import SideKeyPadComponent from './SideKeyPadComponent/SideKeyPadComponent'
import './CalculatorComponent.css';
import ScreenComponent from './ScreenComponent/ScreenComponent'

const CalculatorComponent = () => {
  return(
    <div className="calculator-container">
      <ScreenComponent />
      <KeyPadComponent />
      <SideKeyPadComponent />
    </div>
  );
}

export default CalculatorComponent;