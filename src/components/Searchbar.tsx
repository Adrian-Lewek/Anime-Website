import {useState,useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'

import { useSelector} from 'react-redux'

type State = string
function SearchBar () {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [inputClass, setInputClass] = useState('searchBarInput');
  const searching = useSelector((state: State) => state);


  const navigate = useNavigate();
  useEffect(() => {
    (searching !== '') ? navigate("search?" + searching) : navigate("");
    
  }, [searching])

  const handleClick = () =>{
    if (searchBarActive){
      setInputClass('inputOff')
      setTimeout(() => {
        
        setSearchBarActive(prev => !prev)
      }, 400);
    } else{
      setInputClass('searchBarInput')
      setSearchBarActive(prev => !prev)
    }
    
  }

  return(
    <span className="searchBar" >
      
      <span onClick={handleClick}><FaSearch/></span>
      {searchBarActive && <SearchInput inputClass={inputClass}/>}
    </span>
  )
}
export default SearchBar;