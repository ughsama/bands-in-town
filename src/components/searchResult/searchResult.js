import React from "react";
import {
  SearchResultContainer,
  ArtistAvatarContainer,
  ArtistAvatar,
  NameAndLinkContainer,
  NameText,
  LinkText,
} from "./styledComponents";

export const SearchResult = () => {
  return (
    <SearchResultContainer>
      <ArtistAvatarContainer>
        <ArtistAvatar src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600109/29213219-female-avatar-silhouette-profile-pictures.jpg" />
      </ArtistAvatarContainer>
      <NameAndLinkContainer>
        <NameText>Usama</NameText>
        <LinkText>https://facebook.com/zuck</LinkText>
      </NameAndLinkContainer>
    </SearchResultContainer>
  );
};

export default SearchResult;
