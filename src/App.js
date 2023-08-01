import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu';
import Home from './pages/Home';
import Search from './pages/Search';

import Favorites from './pages/Favorites';
import AllMusicPage from './pages/AllMusic';
import musicAPI from './services/musicAPI';
import FavoriteProvider from './FavoriteContext';
import Footer from './components/Footer'; 
const AppContainer = styled.div`
  background-color: #f2f2f2;
`;

const App = () => {
  return (
    <Router>
      <FavoriteProvider>
        <AppContainer>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
           
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/all-music" element={<AllMusicPage />} />
          </Routes>
          <Footer /> {}
        </AppContainer>
      </FavoriteProvider>
    </Router>
  );
};

export default App;
