// src/pages/AllMusic.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import musicAPI from '../services/musicAPI';

const AllMusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #ff4d4d; /* Tom de vermelho */
  text-align: center; /* Center the title */
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
  const itemsPerPage = 10; // Number of items to display per page
  const [allMusic, setAllMusic] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMusic = allMusic.slice(startIndex, endIndex);

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
            </MusicDetails>
          </MusicItem>
        ))}
      </MusicList>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </PaginationButton>
        <PageNumber>{currentPage}</PageNumber>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima
        </PaginationButton>
      </PaginationContainer>
    </AllMusicContainer>
  );
};

export default AllMusicPage;
