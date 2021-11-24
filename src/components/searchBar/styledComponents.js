import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  border-radius: 10px;
  border: none;
  flex-direction: row;
  width: 80%;
  /* min-width: 20%; */
  height: 40px;
  padding: 10px 0px 10px 20px;
  background-color: white;
`;

export const SearchInputField = styled.input`
  width: 90%;
  border: none;
  font-size: 24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  color: gray;
  :focus {
    background-color: none;
    border: none;
    outline: none;
  }
`;

export const SearchIconContainer = styled.div`
  height: 100%;
  width: 10%;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
