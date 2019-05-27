import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
          faHeart, faComment, faShareSquare, faEnvelope
        } from '@fortawesome/free-regular-svg-icons';
import Footer from './components/FooterComponents/Footer';

library.add(faHeart, faComment, faShareSquare, faEnvelope);

const App = () => {
  return (
    <div className="card-wrapper">
      <HeaderContainer 
        headerText="Lambda School"
        contentText="Let's learn React by building simple interfaces with components. Don't try to
        overthink it, just keep it simple and have fun. Once you feel comfortable using components
        you are well on your way to mastering React!"
      />
      
      <CardContainer 
        imgSrc="https://www.tadigital.com/wp-content/uploads/2017/08/ReactJs-And-AEM-Banner.jpg" 
        imgAlt="React Banner" 
        cardContentHeader="Get Started with React"
        cardContentText="React makes it painless to create interactive UIs. Design simple views
        for each state in your application."
      />
      <Footer/>
      
    </div>
  );
};

export default App;
