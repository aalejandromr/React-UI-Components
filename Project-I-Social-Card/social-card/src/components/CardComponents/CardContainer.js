import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = (props) => {
  return (
    <div className="card-container">
      <CardBanner src={props.imgSrc} alt={props.imgAlt}/>
      <CardContent text={props.cardContentText} header={props.cardContentHeader}/>
    </div>
  )
}

export default CardContainer;