import React from 'react';
import './Header.css';
import Header from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = (props) => {
  return (
    <div className="header-container">
      <ImageThumbnail 
        src="https://everipedia-storage.s3.amazonaws.com/ProfilePics/lambda-school__38385.jpeg?nocache=307fc495-a" 
        alt="Lambda Logo"
      />
      <div className="content-container">
        <Header 
          header={props.headerText}
        />
        <HeaderContent 
          text={props.contentText}
        />
      </div>
    </div>
  );
};

export default HeaderContainer;