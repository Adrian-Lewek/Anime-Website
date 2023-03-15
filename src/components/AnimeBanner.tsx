import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
interface animeType {
  anime: {
    title: string;
    desc: string;
    type: string;
    numOfEp: number;
    shortCode: string;
    numOfSeasons: number;
    rating: number;
  },
  image: {
    img: string;
    type: string;
    name: string;
  },
  buttonText: string;
}
const AnimeBanner:FunctionComponent<animeType> = ({anime, image, buttonText}) => {
  return (
    <div className='randomAnimeContainer'>
        <div className="leftSide">
          <img src={image.img} alt="AnimeLogo" />
          <div className='shadowBox'></div>
        </div>
        <div className="rightSide">
          <div className='title'><h1>{anime.title}</h1></div>
          <div className="desc">{anime.desc}</div>
          <div className="bottomContainer">
            <div className="bottomDesc"><div>{anime.type}</div> <div className="unicode">{'\u2022'}</div> <div>{anime.numOfEp} ep.</div></div>
            <div className="button"><NavLink to={"/anime/" + anime.shortCode}>{buttonText}</NavLink></div>
          </div>
          
        </div>
      </div>
  )
}
export default AnimeBanner;