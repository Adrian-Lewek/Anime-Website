import MainBanner from '../images/CM_banner.jpg'
import AnimeList from '../AnimeList.json';
import { NavLink } from 'react-router-dom';
export default function MainPage() {
 return (
  <div className='Mainpage'>
      <img src={MainBanner} alt="Main Banner"></img>
      <div className='shadowBox'>
        <div className='titleBox'>
          <div className="title"><h1>{AnimeList[0].title}</h1></div>
          <div className="desc">Available Now!</div>
          
        </div>
        <NavLink to="" >MORE</NavLink>
      </div>
    </div>
 )
}