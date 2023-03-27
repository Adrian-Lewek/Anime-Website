import { FunctionComponent } from 'react';
import AnimeItem from '../components/AnimeItem';
interface animeType {
  title: string,
  desc: string,
  anime: {
    title: string;
    desc: string;
    numOfEp: number;
    numOfSeasons: number;
    type: string;
    shortCode: string;
    rating: number;
}[]
}
const AnimeList: FunctionComponent<animeType> = ({ title, desc, anime }) => {
  return(
    <>
      <div className='popularAnime'>
        <div className='browseContainer'>
          <div className='browseTitle'>{title}</div>
          <div className='browseDesc'>{desc}</div>
        </div>
        
        <div className="popularAnimeContainer">
          {anime.map((item, index) => {
            return <AnimeItem anime={item} key={index}/>;
          })}
        </div>
      </div>
    </>
  )
} 
export default AnimeList;