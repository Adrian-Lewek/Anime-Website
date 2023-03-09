import {useState,useEffect, FunctionComponent} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SearchInput from './SearchInput'

import { useSelector} from 'react-redux'

type State = string
interface iProps {
  mobile: Boolean,
  test?: string
};
const SearchBar:FunctionComponent<iProps> = (props) => {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [inputClass, setInputClass] = useState('searchBarInput');
  const searching = useSelector((state: State) => state);


  const navigate = useNavigate();
  useEffect(() => {
    if (searching !== '') { navigate("search?" + searching) }
    else if(searchBarActive) navigate("");
    
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
  if(props.mobile) {
    return(
      <span className="searchBar" >
        <span><FaSearch/></span>
        {<SearchInput inputClass={inputClass}/>}
      </span>
    )
  } else {
    return(
      <span className="searchBar" >
        <span onClick={handleClick}><FaSearch/></span>
        {searchBarActive && <SearchInput inputClass={inputClass}/>}
      </span>
    )
  }
  
}
export default SearchBar;