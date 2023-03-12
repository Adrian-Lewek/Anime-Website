import Images from '../images/index';
import AnimeList from '../AnimeList.json';
import { NavLink } from 'react-router-dom';
import AnimeBrowse from '../components/AnimeList';
import '../style/Homepage.scss'
import AnimeBanner from '../components/AnimeBanner';



export default function HomePage () {
  let rAnimeArray:number[] = [];
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
  let animeFantasy = [...AnimeList];
  animePopular.sort((a,b)=>{
    return b.rating - a.rating;
  })
  animeLastest.sort((a,b)=>{
    return b.year - a.year;
  })
  animeFantasy = animeFantasy.filter(item => item.genres.includes("FANTASY"))
  function randomAnime() {
    let rNumber = Math.floor(Math.random()*AnimeList.length);
    if(rAnimeArray.length > 0 && rAnimeArray.length < AnimeList.length){
      while (rAnimeArray.includes(rNumber)){
        rNumber = Math.floor(Math.random()*9);
      }
      
    }
    rAnimeArray.push(rNumber)
    return rNumber
  }
  let rAnime1 = randomAnime();
  let rAnime2 = randomAnime();
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
      <AnimeBanner anime={AnimeList[rAnime1]} image={getImage(AnimeList[rAnime1].shortCode)}/>
      <AnimeBrowse title='lastest anime' desc='These anime came out recently!' anime={animeLastest}/>
      <AnimeBrowse title='fantasy Anime' desc="You'll get a taste of fantasy in these anime!" anime={animeFantasy}/>
      <AnimeBanner anime={AnimeList[rAnime2]} image={getImage(AnimeList[rAnime2].shortCode)}/>

    </div>
  )
}