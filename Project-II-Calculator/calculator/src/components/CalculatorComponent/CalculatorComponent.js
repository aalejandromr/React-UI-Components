import React, { useState } from 'react';
import KeyPadComponent from './KeyPadComponents/KeyPadComponent'
import SideKeyPadComponent from './SideKeyPadComponent/SideKeyPadComponent'
import './CalculatorComponent.css';
import ScreenComponent from './ScreenComponent/ScreenComponent'

const CalculatorComponent = () => {

  const [value, setValue] = useState("0");
  const [sign, setSign] = useState("");
  const [total, setTotal] = useState(0);

  return(
    <div className="calculator-container">
      <ScreenComponent value={value}/>
      <KeyPadComponent handleUpdate={(buttonValue) => {
        (value === "0") ? setValue(buttonValue.toString()) : setValue(value + buttonValue)
        }} handleClear={() => {
          setValue("0")
        }}/>
      <SideKeyPadComponent handleTotal={(totalCalculated) => {
        setTotal(totalCalculated)
      }} handleMath={() => {
        switch (sign) {
          case "+":
            setTotal(parseInt(total) + parseInt(value))
            setValue(parseInt(total) + parseInt(value))
            // console.log("In + from parent");
            break;
          case "-":
              setTotal(parseInt(total) - parseInt(value))
              setValue(parseInt(total) - parseInt(value))
            break;
          case "x":
              setTotal(parseInt(total) * parseInt(value))
              setValue(parseInt(total) * parseInt(value))
            break;
          case "%":
              setTotal(parseInt(total) / parseInt(value))
              setValue(parseInt(total) / parseInt(value))
            break;
          default:
            break;
        }
      }} handleMathSign={(sign) => {
        setSign(sign)
        setTotal(parseInt(value))
        setValue("0")
        // console.log(sign)
      }}/>
    </div>
  );
}

export default CalculatorComponent;