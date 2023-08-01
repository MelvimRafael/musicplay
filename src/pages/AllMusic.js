import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import musicAPI from '../services/musicAPI';

const AllMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #ff4d4d; 
  text-align: center; 
`;

const MusicList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MusicItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const MusicImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

const MusicDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const MusicName = styled.span`
  font-weight: bold;
`;

const MusicArtist = styled.span`
  color: #555; /* Cor do texto secundário */
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const MusicDuration = styled.span`
  font-size: 14px;
  color: #777;
  strong {
    font-weight: bold;
    margin-right: 5px; /* Adicionar espaçamento à direita para separar do texto do álbum */
  }
`;

const MusicAlbum = styled.span`
  font-size: 14px;
  color: #777;
  strong {
    font-weight: bold;
    margin-left: 5px; /* Adicionar espaçamento à esquerda para separar do texto da duração */
  }
`;


const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PaginationButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;

  &:hover {
    background-color: #d43d3d;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const PageNumber = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const AllMusicPage = () => {
  const itemsPerPage = 10; 
  const [allMusic, setAllMusic] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAllMusic = async () => {
      try {
        const musicList = await musicAPI.getAllMusic();
        setAllMusic(musicList);
        setTotalPages(Math.ceil(musicList.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching all music:', error);
      }
    };

    fetchAllMusic();
  }, []);

  const handleNextPage = () => {
    if (startIndex + itemsPerPage < allMusic.length) {
      setStartIndex((prevStartIndex) => prevStartIndex + itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (startIndex > 0) {
      setStartIndex((prevStartIndex) => prevStartIndex - itemsPerPage);
    }
  };

  const currentMusic = allMusic.slice(startIndex, startIndex + itemsPerPage);

  const formatDuration = (durationInMillis) => {
    const durationInSeconds = durationInMillis / 1000;
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <AllMusicContainer>
      <Title>Todas as Músicas</Title>
      <MusicList>
        {currentMusic.map((music) => (
          <MusicItem key={music.trackId}>
            <MusicImage src={music.artworkUrl60} alt={music.trackName} />
            <MusicDetails>
              <MusicName>{music.trackName}</MusicName>
              <MusicArtist>{music.artistName}</MusicArtist>
              <AlbumInfo>
                <MusicDuration>
                  <strong>Duração:</strong>
                </MusicDuration>
                <MusicDuration>{formatDuration(music.trackTimeMillis)}</MusicDuration>
                <MusicAlbum>
                  <strong>Album:</strong> {music.collectionName}
                </MusicAlbum>
              </AlbumInfo>
            </MusicDetails>
          </MusicItem>
        ))}
      </MusicList>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage} disabled={startIndex === 0}>
          Anterior
        </PaginationButton>
        <PageNumber>{Math.ceil(startIndex / itemsPerPage) + 1}</PageNumber>
        <PaginationButton onClick={handleNextPage} disabled={startIndex + itemsPerPage >= allMusic.length}>
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </AllMusicContainer>
  );
};

export default AllMusicPage;
