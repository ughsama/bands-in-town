import React from "react";
import Search from "../../assets/search.png";
import {
  SearchIconContainer,
  StyledSearchBar,
  SearchIcon,
  SearchInputField,
} from "./styledComponents";

function SearchBar({ updateSearch }) {
  return (
    <StyledSearchBar>
      <SearchInputField
        placeholder="Search artist"
        onChange={(e) => {
          updateSearch(e.target.value);
        }}
      ></SearchInputField>
      <SearchIconContainer>
        <SearchIcon src={Search} />
      </SearchIconContainer>
    </StyledSearchBar>
  );
}

export default SearchBar;
