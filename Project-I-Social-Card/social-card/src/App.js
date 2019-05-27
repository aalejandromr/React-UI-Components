import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

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
      
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
