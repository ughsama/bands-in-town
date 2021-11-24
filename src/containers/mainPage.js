import React from "react";
import SearchBar from "../components/searchBar/SearchBar";
import { Wrapper, SearchResultText } from "./styledComponents";

function MainPage() {
  const [searchName, setSearchName] = React.useState("");
  return (
    <Wrapper>
      <SearchBar updateSearch={setSearchName} />
      {searchName.length > 0 ? (
        <SearchResultText>{`3 Results for "${searchName}"`}</SearchResultText>
      ) : null}
    </Wrapper>
  );
}

export default MainPage;
