
import '../style/App.scss';
import '../style/Navbar.scss'

import {Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Homepage from './Homepage';
import Footer from '../components/Footer';
import Errorpage from './Errorpage';
import Browsepage from './Browsepage';
import Animepage from './Animepage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='webContainer'>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/browse" element={<Browsepage/>}></Route>
        <Route path="/anime/:animeCode" element={<Animepage/>}></Route>
        <Route path="/anime/:animeCode/watch" element={<Browsepage/>}/>
        <Route path="*" element={<Errorpage/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
