import {useEffect, useState} from 'react'
import AnimeList from "../AnimeList.json"
import AnimeItem from "../components/AnimeItem"
import Select, { MultiValue, SingleValue } from 'react-select'
import "../style/Browsepage.scss";
import { useSelector } from "react-redux";
import {BiSlider} from "react-icons/bi"
export default function Browsepage(){
  const searching = useSelector(state => state) as string;
  const [filterGenres, setFilterGenres] = useState<MultiValue<selectEvent>>([])
  const [filterYear, setFilterYear] = useState<string | undefined>("")
  const [filterStudio, setFilterStudio] = useState<string | undefined>("")
  const [filteredAnime, setFilteredAnime] = useState([...AnimeList]);
  const [sortBy, setSortBy] = useState<string | undefined>("");
  const [displayMenu, setDisplayMenu] = useState(false);
  type selectEvent = {
    value: string;
    label: string;
  }
  const optionSort = [
    {value: "RATE", label: "Popularity"},
    {value: "TITLE", label: "Title"},
    {value: "RELEASE_DATE", label: "Release Date"},
  ]
  //get all years from AnimeList
  const allYears = AnimeList.map(item => item.year).sort((a, b) => b-a).filter((item, pos, ary) => !pos || item !== ary[pos - 1]);
   //put all Years into object
   const optionYear = allYears.map(item => {
    return {value: item.toString(), label: item.toString()}
  })
  //get all Studios from AnimeList
  const allStudios = AnimeList.map(item => item.studio).sort().filter((item, pos, ary) => !pos || item !== ary[pos - 1]);
  //put all Studios into object
  const optionStudio = allStudios.map(item => {
    let temp = item.charAt(0).toUpperCase()+ item.slice(1).toLowerCase();
    return {value: item, label: temp}
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
  function handleChangeStudio (e:SingleValue<selectEvent>){
    setFilterStudio(e?.value)
  }
  function handleChangeSort (e:SingleValue<selectEvent>){
    setSortBy(e?.value)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
    if(filterStudio !== undefined && filterStudio !== ""){
      filteredG = filteredG.filter(item => {
        return item.studio === filterStudio;
      })
    } 
    if(searching !== ''){
      console.log()
      filteredG = filteredG.filter(item => item.title.toLocaleLowerCase().includes(searching.toLocaleLowerCase()));
    }
    if (sortBy !== "" && sortBy !== undefined){
      switch (sortBy) {
        case "RATE":
          filteredG = filteredG.sort((a,b) => b.rating - a.rating);
          break;
        case "TITLE":
          filteredG = filteredG.sort((a,b) => (a.title > b.title ) ? 1 : -1);
          break;
        case "RELEASE_DATE":
          filteredG = filteredG.sort((a,b) => b.year - a.year);
          break;
        default:
          break;
      }
    }
    setFilteredAnime(filteredG);
  }, [filterGenres, filterYear, searching, filterStudio, sortBy])
  return (
    <div className="BrowseContainer">
      <div className="browseSearchBar">
        <div className="textContainer">
          <div className="title">Browse Anime</div>
          <div className="desc">You can search for anime here</div>
        </div>
      </div>
      <div className="itemsContainer">
        {filteredAnime.length> 0 ? filteredAnime.map((item, index) => <AnimeItem anime={item} key={index}/>) : <div className='noAnime'>There are no anime matching the filters given</div>}
      </div>
      <div className='menuClickBox' onClick={() => setDisplayMenu(!displayMenu)}><BiSlider/></div>
      <div className={displayMenu? "filterContainer" :"filterContainer hideFilterMenu"}>
        <div className="title">Filter Options</div>
        <div className="filterItem">
          <div className='labelTitle'>Genres</div>
          <Select 
            options={optionsGenres} 
            isMulti 
            className="react-select-container"
            classNamePrefix="react-select"
            name="genre" 
            closeMenuOnSelect={false}
            onChange={(e) => handleChangeGenres(e)}
          />
          <div className='labelTitle'>Year</div>
          <Select 
            options={optionYear}  
            className="react-select-container"
            classNamePrefix="react-select"
            isClearable
            name="year" 
            onChange={(e) => handleChangeYear(e)}
          />
          <div className='labelTitle'>Studio</div>
          <Select 
            options={optionStudio}  
            className="react-select-container"
            classNamePrefix="react-select"
            isClearable
            name="studio" 
            onChange={(e) => handleChangeStudio(e)}
          />
          <div className='labelTitle'>Sort by </div>
          <Select 
            options={optionSort}  
            className="react-select-container"
            classNamePrefix="react-select"
            isClearable
            name="sorting" 
            onChange={(e) => handleChangeSort(e)}
          />
        </div>
      </div>
    </div>
  )
}