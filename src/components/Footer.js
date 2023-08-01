import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Música App. Todos os direitos reservados. Desemvolvido por{' '}
        <FooterLink href="https://www.youtube.com" target="_blank" rel="">
          Melvim Rafael
        </FooterLink>
      </FooterText> 
    </FooterContainer>
  );
};

export default Footer;
