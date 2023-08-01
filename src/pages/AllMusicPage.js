import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import musicAPI from '../services/musicAPI';

const AllMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #ff4d4d; /* Tom de vermelho */
`;

const MusicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MusicItem = styled.li`
  margin-bottom: 15px;
`;

const MusicInfo = styled.div`
  display: flex;
  align-items: center;
`;

const MusicImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
`;

const AllMusicPage = () => {
  const [allMusic, setAllMusic] = useState([]);

  useEffect(() => {
    const fetchAllMusic = async () => {
      try {
        const musicList = await musicAPI.getAllMusic();
        setAllMusic(musicList);
      } catch (error) {
        console.error('Error fetching all music:', error);
      }
    };

    fetchAllMusic();
  }, []);

  return (
    <AllMusicContainer>
      <Title>Todas as Músicas</Title>
      <MusicList>
        {allMusic.map((music) => (
          <MusicItem key={music.trackId}>
            <MusicInfo>
              <MusicImage src={music.artworkUrl100} alt={music.trackName} />
              <div>
                <div>{music.trackName}</div>
                <div>{music.artistName}</div>
                <div>{music.collectionName}</div>
                <div>{music.trackTimeMillis / 1000} seconds</div>
              </div>
            </MusicInfo>
          </MusicItem>
        ))}
      </MusicList>
    </AllMusicContainer>
  );
};

export default AllMusicPage;
