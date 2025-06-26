import logo from './logo.svg';
import './App.css';
import Topnav from './Component/topnav';
import Banner from './Component/banner';
import Home from './Component/Home';
import React, { useState } from 'react';

function App() {
  const[darkMode, setDarkMode] = useState(false);
  const handleToggle = (event) => {
    setDarkMode(event);
  };
  console.log(darkMode);
  return (
    <div className="App">
      <Topnav handletoggle={(e)=>handleToggle(e)}/>
      <Banner darkMode={darkMode}/>
      <Home darkMode={darkMode} />
    </div>
  );
}

export default App;
