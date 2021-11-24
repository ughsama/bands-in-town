import styled from "styled-components";

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 300px; */
  width: 30%;
  height: 100px;
  background-color: white;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    background-color: lightblue;
    height: auto;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ArtistAvatarContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  width: 20%;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    width: 100px;
  }
`;

export const ArtistAvatar = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const NameAndLinkContainer = styled.div`
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const NameText = styled.p`
  font-size: 14px;
  color: black;
  margin-top: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const LinkText = styled.p`
  font-size: 12px;
  color: gray;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 20px;
`;
