import { useParams } from "react-router-dom";
import AnimeList from '../AnimeList.json'
import Images from "../images";
import '../style/Animepage.scss'
import {useEffect} from 'react'
import AnimeBanner from "../components/AnimeBanner";
import GenreItem from "../components/GenreItem";
import RecomendedAnime from "../components/RecomendedAnime";

export interface IAnimePageProps {}

const Animepage: React.FunctionComponent<IAnimePageProps> = (props) => {

  const {animeCode} = useParams();
  //get anime from props
  const anime = AnimeList.filter(item => item.shortCode===animeCode)[0];
  //get image from props
  const img = Images.filter(item => item.name===anime.shortCode && item.type === "logo")[0];
  //set background image to anime container
  const leftSideStyle= {
    backgroundImage : "url("+ img.img+") "
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className="Anime">
      <div className="background">
        <div className="backgroundContainer" style={leftSideStyle}/>
        <div className="backgroundBottom"/>
      </div>
      <div className="animeContainer" >
        <AnimeBanner buttonText="WATCH NOW" link="watch" anime={anime} image={img}></AnimeBanner>
        
      </div>
      <div className="rightside">
        <div className="backgroundOpacity"/>
        <div className="descContainer">
          <div className="itemContainer"><div className="bold">Anime: </div><div className="text">{anime.title}</div></div>
          <div className="itemContainer descriptionTitle"><div className="bold">Description:</div></div>
          <div className="itemContainer description"><div className="text">{anime.desc}</div></div>
          <div className="itemContainer"><div className="bold">Score: </div><div className="text">{anime.rating/10}</div></div>
          <div className="itemContainer"><div className="bold">Year Aired: </div><div className="text">{anime.year}</div></div>
          <div className="itemContainer"><div className="bold">Episodes: </div><div className="text">{anime.numOfEp}</div></div>
          <div className="itemContainer"><div className="bold">Seasons: </div><div className="text">{anime.numOfSeasons}</div></div>
          <div className="itemContainer"><div className="bold">Studio: </div><div className="text">{anime.studio}</div></div>
          <div className="itemContainer"><div className="bold">Type: </div><div className="text">{anime.type}</div></div>
          <div className="itemContainer Genres">
            <div className="bold">Genres: </div>{anime.genres.map( (item, index) => {
              return (<GenreItem genre={item} key={index}/>)
            })}
          </div>
        </div>
      </div>
      
    </div>
    <RecomendedAnime name={anime.shortCode} genres={anime.genres}/>
    </>
  )
};
export default Animepage
