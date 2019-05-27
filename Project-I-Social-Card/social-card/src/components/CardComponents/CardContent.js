import React from 'react';
import './Card.css';
// import HeaderTitle from '../HeaderComponents';
// import HeaderContent from '../HeaderComponents';
const CardContent = (props) => {
  return(
    <div className="card-content">
      <h2> {props.header} </h2>
      <p > {props.text} </p>
    </div>
  )
}

export default CardContent;