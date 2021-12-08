import React from 'react';
import { Container } from './styles';
import {BiSearchAlt2} from 'react-icons/bi'

export function SearchInput() {
  return (
     <Container>
        <input type="text" placeholder="Quer ajuda na procura? Pesquise aqui" />
        <BiSearchAlt2 className="icon" />
     </Container>
  );
}