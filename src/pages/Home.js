import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #ff4d4d; 
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: #333; 
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #555; 
  max-width: 600px;
  text-align: center;
`;

const ImageCarousel = styled(Carousel)`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const ImageSlide = styled.img`
  height: 200px;
  object-fit: cover;
`;

const Home = () => {
  const carouselImages = [
    'https://st3.depositphotos.com/3367263/16225/i/600/depositphotos_162256456-stock-photo-piano-with-white-and-black.jpg', 
    'https://st.depositphotos.com/1835807/2528/i/450/depositphotos_25280943-stock-photo-piano-keyboard-and-headphones.jpg', 
    'https://onofre.musica.ufrn.br/wp-content/uploads/2020/05/Banner-MV-1-600x200.jpeg', 
  ];

  return (
    <HomeContainer>
      <Title>Bem-vindo ao Música!</Title>
      <Subtitle>Seu aplicativo de temas musicais favorito</Subtitle>
      <Description>
        Aqui você encontrará uma seleção das melhores músicas de diversos
        gêneros e artistas. Navegue pelas páginas para buscar músicas,
        visualizar detalhes das faixas e adicionar suas músicas favoritas
        à lista de favoritos.
      </Description>
      <ImageCarousel autoPlay showArrows={false} infiniteLoop>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <ImageSlide src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </ImageCarousel>
    </HomeContainer>
  );
};

export default Home;
