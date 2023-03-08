import React from 'react';
import '../style/App.scss';
import '../style/Navbar.scss'

import {Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import Footer from '../components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='webContainer'>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
