"use client"

import React from 'react';
import CustomInput from "@/components/UI/Input";
import {SearchInputStyled} from "@/components/UI/ShearchInput/styled";
import SearchIcon from '@mui/icons-material/Search';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const SearchInput = ({searchValue, setSearchValue}) => {
    const clearInput = () => {
        setSearchValue("");
    }


    return (
        <SearchInputStyled>
            <div className="inputWrapper">
                <button className="searchButton">
                    <SearchIcon className="icon"/>
                </button>

                <input type="text"
                       value={searchValue}
                       onChange={(e) => setSearchValue(e.target.value)}
                       className="bg-gray-200 text-stile-900 px-10 py-3 min-w-80 rounded-lg text-base
                           placeholder-gray-400 text-blue-950 focus:outline-gray-400"
                       placeholder="Search dishes, restaurants"/>

                {searchValue ?
                    <button className="clearButton" onClick={clearInput}>
                        <CancelRoundedIcon className="icon"/>
                    </button>
                    :
                    ""
                }

            </div>
        </SearchInputStyled>
    );
};

export default SearchInput;