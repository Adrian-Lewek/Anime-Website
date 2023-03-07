
import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux";

interface SearchInputProps {
  inputClass: string;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({ inputClass }) => {
  const searching = useSelector(state => state) as string;
  const dispatch = useDispatch();
  return (
    <input autoFocus className={inputClass} value={searching} onChange={(e) => dispatch({type: 'CHANGE', payload: e.target.value})}/>
  );
};

export default SearchInput;