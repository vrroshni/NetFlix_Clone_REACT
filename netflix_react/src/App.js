import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
