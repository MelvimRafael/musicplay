    import React, { useState } from 'react';
    import styled from 'styled-components';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faHeart } from '@fortawesome/free-solid-svg-icons';
    import { useFavoriteContext } from '../FavoriteContext'; // Importe o hook do contexto
    import musicAPI from '../services/musicAPI';

    const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    `;

    const Title = styled.h1`
    margin-bottom: 20px;
    color: #ff4d4d; /* Tom de vermelho */
    `;

    const SearchInput = styled.input`
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
    border: 2px solid #ff4d4d; /* Tom de vermelho */
    border-radius: 4px;
    `;

    const SearchButton = styled.button`
    padding: 10px 20px;
    background-color: #ff4d4d; /* Tom de vermelho */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    `;

    const ResultsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    `;

    const ResultItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    `;

    const FavoriteButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${(props) => (props.isFavorited ? '#ff4d4d' : '#ddd')};
    `;

    const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { favorites, addFavorite, removeFavorite } = useFavoriteContext(); // Use o contexto de favoritos

    const handleSearch = async () => {
        try {
        const results = await musicAPI.searchMusic(searchTerm);
        setSearchResults(results);
        } catch (error) {
        console.error('Error searching music:', error);
        }
    };

    const handleFavorite = (music) => {
        if (favorites.some((fav) => fav.trackId === music.trackId)) {
        removeFavorite(music.trackId);
        } else {
        addFavorite(music);
        }
    };

    return (
        <SearchContainer>
        <Title>Buscar Música</Title>
        <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite o nome da música"
        />
        <SearchButton onClick={handleSearch}>Buscar</SearchButton>
        <ResultsList>
            {searchResults.map((music) => (
            <ResultItem key={music.trackId}>
                {music.trackName}
                <FavoriteButton
                isFavorited={favorites.some((fav) => fav.trackId === music.trackId)}
                onClick={() => handleFavorite(music)}
                >
                <FontAwesomeIcon icon={faHeart} />
                </FavoriteButton>
            </ResultItem>
            ))}
        </ResultsList>
        </SearchContainer>
    );
    };

    export default Search;
