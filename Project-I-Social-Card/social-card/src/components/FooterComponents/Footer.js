import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = (props) => {
  const [count, setCount] = useState(0);
  const [sharedCount, sharedSetCount] = useState(0);

  return(
    <div className="card-footer-container">
      <FontAwesomeIcon icon={["far", "comment"]}
      /> 
      <FontAwesomeIcon icon={["far", "share-square"]}
        onClick={
          () => sharedSetCount(sharedCount + 1)
        }
      />
      <code> {sharedCount} </code>
      <FontAwesomeIcon icon={["far", "heart"]} onClick={
        () => setCount(count + 1)
      }/> <code> {count} </code>
      <FontAwesomeIcon icon={["far", "envelope"]}/>
    </div>
  )
}

export default Footer;