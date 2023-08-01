import React from 'react';
import styled from 'styled-components';
import { useFavoriteContext } from '../FavoriteContext'; 

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2; 
`;

const MusicListContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #ff4d4d; 
`;

const FavoritesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FavoriteItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FavoriteImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const HeartIconContainer = styled.div`
  margin-left: 20px;
  font-size: 20px;
  color: #ff4d4d; 
`;

const Favorites = () => {
  const { favorites } = useFavoriteContext(); 

  return (
    <FavoritesContainer>
      <MusicListContainer>
        <Title>Favoritos</Title>
        <FavoritesList>
          {favorites.map((music) => (
            <FavoriteItem key={music.trackId}>
              <FavoriteImage src={music.artworkUrl100} alt={music.trackName} />
              {music.trackName}
            </FavoriteItem>
          ))}
        </FavoritesList>
      </MusicListContainer>
      <HeartIconContainer>
        <i className="fa fa-heart"></i> {}
      </HeartIconContainer>
    </FavoritesContainer>
  );
};

export default Favorites;
