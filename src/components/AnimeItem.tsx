import Images from "../images/index"
import { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import {BsFillPlayFill} from "react-icons/bs"
;
interface animeType {
  anime: {
    title: string;
    desc: string;
    type: string;
    numOfEp: number;
    shortCode: string;
    numOfSeasons: number;
    rating: number;
  }
}
const AnimeItem: FunctionComponent<animeType> = ({ anime }) => {
  return (
    
    <div className="animeItem">
      <img src={Images.filter(item=>(item.name === anime.shortCode && item.type === "logo"))[0].img} alt="" />
      <div className="shadowBox"/>
      <NavLink className="clickBox" to=""> <BsFillPlayFill/> </NavLink>
      <div className="itemTitleContainer">
      <div className="itemTitle">
        {anime.title}
      </div>
      <div className="itemDesc">
      {anime.type} <div className="unicode">{'\u2022'}</div> {anime.numOfEp} ep.
        
      </div>
      </div>
    </div>
  )
}
export default AnimeItem;