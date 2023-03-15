import AnimeItem from "./AnimeItem";
import AnimeList from '../AnimeList.json'
import { FunctionComponent } from "react"

interface animeType {
  name: string
  genres: string[];
}
const RecomendedAnime: FunctionComponent<animeType> = ({ name, genres }) => {
  const top5RecomendedAnimeList = AnimeList.filter(item => item.shortCode !== name).map((item, index) => {
    let t = item.genres.filter(genre => genres.includes(genre))
    return (
      {
        "genres": t.length,
        "animeCode": item.shortCode
      }
    )
  }).sort((a,b)=> b.genres - a.genres).slice(0,10)
  const recomendedAnimeList = AnimeList.filter(item => {
    let t = top5RecomendedAnimeList.map(item => item.animeCode)
    return t.includes(item.shortCode)
  }).sort((a,b) => b.rating - a.rating);
  console.log(recomendedAnimeList)
  return(
    <div className="RecomendedAnime">
      <div className="titleBar"> Recomended Anime</div>
      <div className="bottomContainer">
        <div className="animeContainer">
        {recomendedAnimeList.map((item, index)=> <AnimeItem key={index} anime={item}/>)}
        </div>
        <div className="newsContainer">
          
        </div>
      </div>
    </div>
  )
}
export default RecomendedAnime;