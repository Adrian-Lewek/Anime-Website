import Images from '../images/index';
import AnimeList from '../AnimeList.json';
import { NavLink } from 'react-router-dom';
import AnimeBrowse from '../components/AnimeList';
import '../style/Homepage.scss'



export default function HomePage () {

  const banner = Images.filter(item => (item.type === 'banner'))[0]

  function getAnime(code:string) {
    const anime = AnimeList.filter(item => code === item.shortCode);
    return anime[0];
  } 
  function getImage(code:string){
    const anime = Images.filter(item => code === item.name && item.type === 'logo');
    return anime[0];
  }

  const animePopular = [...AnimeList];
  const animeLastest = [...AnimeList];
  animePopular.sort((a,b)=>{
    return b.rating - a.rating;
  })
  animeLastest.sort((a,b)=>{
    return b.year - a.year;
  })
  const rAnime = Math.floor(Math.random()*9)

  return (
    <div className='Mainpage'>
      <div className='mainBanner'>
        <img src={banner.img} alt="Main Banner"></img>
        <div className='shadowBox'>
          <div className='titleBox'>
            <div className="title"><h1>{getAnime(banner.name).title}</h1></div>
            <div className="desc">Available Now!</div>
          </div>
          <NavLink to="" >SEE MORE</NavLink>
        </div>
      </div>
      <AnimeBrowse title='Popular anime' desc='Most popular anime this season!' anime={animePopular}/>
      
      <div className='randomAnimeContainer'>
        <div className="leftSide">
          <img src={getImage(AnimeList[rAnime].shortCode).img} alt="AnimeLogo" />
          <div className='shadowBox'></div>
        </div>
        <div className="rightSide">
          <div className='title'><h1>{AnimeList[rAnime].title}</h1></div>
          <div className="desc">{AnimeList[rAnime].desc}</div>
          <div className="bottomContainer">
            <div className="bottomDesc">{AnimeList[rAnime].type} <div className="unicode">{'\u2022'}</div> {AnimeList[rAnime].numOfEp} ep.</div>
            <div className="button"><NavLink to="">SEE MORE</NavLink></div>
          </div>
          
        </div>
      </div>
      
      <AnimeBrowse title='lastest anime' desc='These anime came out recently!' anime={animeLastest}/>
    </div>
  )
}