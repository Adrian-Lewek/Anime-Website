import {useEffect, useState} from 'react'
import AnimeList from "../AnimeList.json"
import AnimeItem from "../components/AnimeItem"
import Select, { MultiValue, SingleValue } from 'react-select'
import "../style/Browsepage.scss";
import { useSelector } from "react-redux";
export default function Browsepage(){
  const searching = useSelector(state => state) as string;
  const [filterGenres, setFilterGenres] = useState<MultiValue<selectEvent>>([])
  const [filterYear, setFilterYear] = useState<string | undefined>("")
  const [filteredAnime, setFilteredAnime] = useState([...AnimeList]);
  type selectEvent = {
    value: string;
    label: string;
  }
  
  //get all years from AnimeList
  const allYears = AnimeList.map(item => item.year).sort((a, b) => b-a).filter((item, pos, ary) => !pos || item !== ary[pos - 1]);
   //put all Years into object
   const optionYear = allYears.map(item => {
    return {value: item.toString(), label: item.toString()}
  })
  
  //get all Genres from AnimeList
  let allGenres:string[] = []; 
  AnimeList.map(item => item.genres).forEach(array => {
    allGenres = allGenres.concat(array);
  })
  allGenres = [...new Set(allGenres)].sort()
  //put all Genres into object
  const optionsGenres = allGenres.map(item => {
    let temp = item.charAt(0).toUpperCase()+ item.slice(1).toLowerCase();
    return {value: item, label: temp}
  })
 

  function handleChangeGenres (e:MultiValue<selectEvent>){
    setFilterGenres(e)
  }
  function handleChangeYear (e:SingleValue<selectEvent>){
    setFilterYear(e?.value)
  }

  useEffect(()=>{
    let filteredG = AnimeList.filter(item => {
      let temp = filterGenres.filter(genre => {
        return item.genres.includes(genre.value)
      })
      return temp.length === filterGenres.length;
    })
    if(filterYear !== undefined && filterYear !== ""){
      filteredG = filteredG.filter(item => {
        return item.year.toString() === filterYear;
      })
    } 
    setFilteredAnime(filteredG);
  }, [filterGenres, filterYear])
  useEffect(() => {
  }, [searching])
  
  
  return (
    <div className="BrowseContainer">
      <div className="browseSearchBar">
      </div>
      <div className="itemsContainer">
        {filteredAnime.map((item, index) => <AnimeItem anime={item} key={index}/>)}
      </div>
      <div className="filterContainer">
        <div className="title">Filter</div>
        <div className="filterItem">
          <Select 
            options={optionsGenres} 
            isMulti 
            name="genres" 
            closeMenuOnSelect={false}
            onChange={(e) => handleChangeGenres(e)}
          />
          <Select 
            options={optionYear}  
            isClearable
            name="year" 
            onChange={(e) => handleChangeYear(e)}
          />
        </div>
      </div>
    </div>
  )
}