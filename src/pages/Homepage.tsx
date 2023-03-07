import Images from '../images/index';
import AnimeList from '../AnimeList.json';
import { NavLink } from 'react-router-dom';
import '../style/Homepage.scss'
import AnimeItem from '../components/AnimeItem';

export default function HomePage () {
  let i = 0
  const banner = Images.filter(item => (item.type === 'banner'))[0]
  function getAnime(code:string) {
    const anime = AnimeList.filter(item => code === item.shortCode);
    return anime[0];
  } 
  return (
    <div className='Mainpage'>
      <div className='mainBanner'>
        <img src={banner.img} alt="Main Banner"></img>
        <div className='shadowBox'>
          <div className='titleBox'>
            <div className="title"><h1>{getAnime(banner.name).title}</h1></div>
            <div className="desc">Available Now!</div>
            
          </div>
          <NavLink to="" >MORE</NavLink>
        </div>
        
      </div>
      <div className='popularAnime'>
        <div className='browseTitle'>Popular Anime</div>
        <div className='browseDesc'>Most popular anime this season!</div>
        <div className="popularAnimeContainer">
          {AnimeList.map((item, index) => {
            
            if( i < 5) {
              i++
              return <AnimeItem anime={item}/>
            } 
            return null
          })}
        </div>
      </div>
    </div>
  )
}