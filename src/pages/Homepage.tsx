
import '../style/Homepage.scss'
import AnimeList from '../AnimeList.json';
import MainPage from '../components/MainPage';

export default function HomePage () {
  console.log(AnimeList)
  return (
    <div className="HomePage">
      <MainPage/>
    </div>
  )
}