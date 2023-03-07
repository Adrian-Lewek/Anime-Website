import React from 'react';
import '../style/App.scss';
import '../style/Navbar.scss'

import {Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Homepage from './Homepage';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
