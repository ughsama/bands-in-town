import React from "react";
import SearchBar from "../components/searchBar/searchBar";
import SearchResult from "../components/searchResult/searchResult";
import {
  Wrapper,
  SearchResultText,
  SearchResultsWrapper,
} from "./styledComponents";

function MainPage() {
  const [searchName, setSearchName] = React.useState("");
  return (
    <Wrapper>
      <SearchBar updateSearch={setSearchName} />
      {searchName.length > 0 ? (
        <SearchResultText>{`3 Results for "${searchName}"`}</SearchResultText>
      ) : null}
      <SearchResultsWrapper>
        <SearchResult></SearchResult>
        <SearchResult></SearchResult>
        <SearchResult></SearchResult>
      </SearchResultsWrapper>
    </Wrapper>
  );
}

export default MainPage;
