import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ff4d4d; 
  padding: 10px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

const MenuLink = styled(Link)`
  color: #fff; /* Texto branco */
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f9f9f9; 
  }
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

const Separator = styled.div`
  height: 30px;
  width: 1px;
  background-color: #fff; 
  margin: 0 10px;
`;

const Menu = () => {
  return (
    <Nav>
      <Title>MUSIC Play</Title>
      <MenuList>
        <MenuItem>
          <MenuLink to="/">Início</MenuLink>
        </MenuItem>
        <Separator />
        <MenuItem>
          <MenuLink to="/search">Buscar Músicas</MenuLink>
        </MenuItem>
        <Separator />
        <MenuItem>
          <MenuLink to="/favorites">Favoritos</MenuLink>
        </MenuItem>
        <Separator />
        {}
        <MenuItem>
          <MenuLink to="/all-music">Todas as Músicas</MenuLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default Menu;
