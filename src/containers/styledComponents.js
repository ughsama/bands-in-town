import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: slategrey;

  @media only screen and (max-width: 600px) {
    height: 100vh;
    width: 100%;
    padding: 2%;
  }
`;

export const SearchResultText = styled.div`
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 14px;
  font-weight: 400;
  color: gray;
  margin-top: 40px;
  text-align: left;
`;

export const SearchResultsWrapper = styled.div`
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  column-count: 3;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: space-between;
  width: 81%;
`;
