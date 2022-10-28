import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,actions,comedy,horror,romance} from './urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost  urls={originals} title={'NetFlix Originals'}/>
      <Rowpost urls={actions} title={'Action'} isSmall/>
      <Rowpost urls={comedy} title={'Comedy'} isSmall/>
      <Rowpost urls={horror} title={'Horror'} isSmall/>
      <Rowpost urls={romance} title={'Romance'} isSmall/>
    </div>
  );
}

export default App;
