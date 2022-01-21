import React from 'react';
import './App.css';
import Carousel from "./components/UI/Carousel";

function App() {

  return (
      <div className="wrapper">
        <div className="container header">
          <input className='searchInput' type='search'/>
          <button className='loginBtn'>Log In</button>
        </div>
        <div className="container main">
          <Carousel/>
        </div>
          {/*<Carousel/>*/}
      </div>
  );
}

export default App;
