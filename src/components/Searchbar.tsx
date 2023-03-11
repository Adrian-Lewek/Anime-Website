import {useState,useEffect, FunctionComponent} from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate, useLocation} from 'react-router-dom'
import SearchInput from './SearchInput'

import { useDispatch, useSelector} from 'react-redux'

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
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => { 
    if(location.search){
      let temp = location.search.slice(1).split("&").filter(item => item.slice(0,6).includes("search"));
      if(temp.length > 0){
        console.log('test')
        dispatch({type: 'CHANGE', payload: temp[0].slice(7)})
      }
    }
    // eslint-disable-next-line
  },[]);


  useEffect(() => {
    if (searching !== '') { navigate("browse?" + searching) }
    else if(searchBarActive) navigate("browse");
    // eslint-disable-next-line
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