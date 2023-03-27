import AnimeItem from "./AnimeItem";
import AnimeList from '../AnimeList.json'
import { FunctionComponent } from "react"
import NewsList from '../NewsList.json'
import { NavLink } from "react-router-dom";
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
  return(
    <div className="RecomendedAnime">
      <div className="titleBar"> Recomended Anime</div>
      <div className="bottomContainer">
        <div className="leftSide">
          <div className="animeContainer">
          {recomendedAnimeList.map((item, index)=> <AnimeItem key={index} anime={item}/>)}
          </div>
        </div>
        <div className="newsContainer">
          <div className="background"></div>
          <div className="news">
            <div className="newsContainerTitle">News</div>
            {NewsList.map((item, index) => <div key={index} className="newsItem">
              <div className="newsTitle">{item.title}</div>  
              <div className="newsDesc">{item.desc}</div>
              <div className="newsBottomContainer">
                <div className="date">{item.date}</div>
                <div className="seeMore">{<NavLink to="">See More {">"}</NavLink>}</div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecomendedAnime;