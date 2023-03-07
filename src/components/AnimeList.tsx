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
  let i = 0;
  return(
    <>
      <div className='popularAnime'>
        <div className='browseContainer'>
          <div className='browseTitle'>{title}</div>
          <div className='browseDesc'>{desc}</div>
        </div>
        
        <div className="popularAnimeContainer">
          {anime.map((item, index) => {
            if( i < 5) {
              i++;
              return <AnimeItem anime={item} key={index}/>;
            } 
            return null
          })}
        </div>
      </div>
    </>
  )
} 
export default AnimeList;