"use client"
import {SearchInputStyled} from "@/components/UI/SearchInput/styled";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({searchValue, setSearchValue}) => {
  const clearInput = () => {
    setSearchValue("");
  }

  return (
    <SearchInputStyled>
      <button className="searchButton">
        <span>
          <SearchIcon className="icon"/>
        </span>
      </button>

      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="input"
        placeholder="Search dishes, restaurants"
      />

      {searchValue ?
        <button className="clearButton" onClick={clearInput}>
            <CancelRoundedIcon className="icon"/>
        </button>
        :
        <span></span>
      }
    </SearchInputStyled>
  );
};

export default SearchInput;